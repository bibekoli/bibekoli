const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const RECAPTCHA_MIN_SCORE = 0.5;

export type RecaptchaVerificationResponse = {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
  [key: string]: unknown;
};

export type RecaptchaValidationResult = {
  success: boolean;
  status: number;
  body: {
    verificationData?: RecaptchaVerificationResponse;
    error?: string;
    details?: string[];
  };
};

export async function validateRecaptchaToken(captchaToken?: string): Promise<RecaptchaValidationResult> {
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

  if (!recaptchaSecret) {
    return {
      success: false,
      status: 500,
      body: {
        error: "Server configuration error.",
        details: ["RECAPTCHA_SECRET_KEY is not configured"],
      },
    };
  }

  if (!captchaToken) {
    return {
      success: false,
      status: 400,
      body: {
        error: "reCAPTCHA verification failed.",
        details: ["captchaToken is required"],
      },
    };
  }

  try {
    const verificationParams = new URLSearchParams();
    verificationParams.append("secret", recaptchaSecret);
    verificationParams.append("response", captchaToken);

    const verifyResponse = await fetch(RECAPTCHA_VERIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: verificationParams.toString(),
    });

    if (!verifyResponse.ok) {
      return {
        success: false,
        status: 502,
        body: {
          error: "Failed to verify reCAPTCHA token.",
          details: ["reCAPTCHA verification service returned an unexpected response"],
        },
      };
    }

    const verificationData = (await verifyResponse.json()) as RecaptchaVerificationResponse;

    const score = typeof verificationData.score === "number" ? verificationData.score : undefined;
    const hasSufficientScore = score === undefined || score >= RECAPTCHA_MIN_SCORE;

    if (!verificationData.success || !hasSufficientScore) {
      return {
        success: false,
        status: 400,
        body: {
          error: "reCAPTCHA verification failed.",
          details: verificationData["error-codes"] ?? [
            score !== undefined && score < RECAPTCHA_MIN_SCORE
              ? `reCAPTCHA score too low (${score.toFixed(2)})`
              : "Invalid reCAPTCHA token",
          ],
          verificationData,
        },
      };
    }

    return {
      success: true,
      status: 200,
      body: {
        verificationData,
      },
    };
  } catch (error) {
    console.error("Error verifying reCAPTCHA token", error);
    return {
      success: false,
      status: 500,
      body: {
        error: "An unexpected error occurred while verifying reCAPTCHA.",
      },
    };
  }
}
