import { NextApiRequest, NextApiResponse } from "next";
import { validateRecaptchaToken } from "@/lib/recaptcha";
import { saveContactSubmission, getCaptchaTokenUsageCount } from "@/lib/mongodb";

type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
  captchaToken?: string;
};

export default async function ContactMe(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message, captchaToken } = (req.body ?? {}) as ContactRequestBody;

  if (!name || !email || !message || !captchaToken) {
    return res.status(400).json({
      error: "Missing required fields.",
      details: ["name", "email", "message", "captchaToken"].filter((field) => !(req.body ?? {})[field as keyof ContactRequestBody]).map((field) => `${field} is required`),
    });
  }

  const remoteIp = (req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0]?.trim() ?? req.socket.remoteAddress ?? undefined;

  const validationResult = await validateRecaptchaToken(captchaToken);

  if (!validationResult.success) {
    return res.status(validationResult.status).json(validationResult.body);
  }

  const usageCount = await getCaptchaTokenUsageCount(captchaToken!);
  if (usageCount >= 3) {
    return res.status(400).json({ error: "Captcha token has been used too many times." });
  }

  try {
    const saveResult = await saveContactSubmission({
      name,
      email,
      message,
      captchaToken: captchaToken!,
      recaptchaVerification: validationResult.body.verificationData,
      metadata: {
        userAgent: req.headers["user-agent"],
        ip: remoteIp,
      },
    });

    return res.status(200).json({
      message: "Message received. reCAPTCHA verified successfully.",
      ...validationResult.body,
      saved: saveResult.acknowledged,
      submissionId: saveResult.insertedId,
    });
  } catch (error) {
    console.error("Error saving contact submission", error);
    return res.status(500).json({
      error: "Failed to record submission. Please try again later.",
    });
  }
}
