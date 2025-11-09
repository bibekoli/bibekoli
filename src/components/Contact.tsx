import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useToast } from "./ui/Toast";

declare global {
  interface Window {
    grecaptcha?: {
      ready(callback: () => void): void;
      execute(siteKey: string, options: { action: string }): Promise<string>;
    };
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);
  const { showToast } = useToast();

  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
    if (!recaptchaSiteKey) {
      console.warn("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not defined.");
      return;
    }

    const scriptId = "google-recaptcha-script";
    if (document.getElementById(scriptId)) {
      setIsRecaptchaReady(true);
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setIsRecaptchaReady(true);
    script.onerror = () => {
      console.error("Failed to load Google reCAPTCHA script.");
      setIsRecaptchaReady(false);
    };

    document.body.appendChild(script);

    return () => {
      // Keep the script for performance; do not remove on unmount
    };
  }, [recaptchaSiteKey]);

  const executeRecaptcha = async () => {
    if (!recaptchaSiteKey) {
      throw new Error("Missing reCAPTCHA site key.");
    }

    if (!window.grecaptcha) {
      throw new Error("reCAPTCHA is not ready yet.");
    }

    return new Promise<string>((resolve, reject) => {
      try {
        window.grecaptcha?.ready(async () => {
          try {
            const token = await window.grecaptcha!.execute(recaptchaSiteKey, {
              action: "contact_form",
            });
            resolve(token);
          } catch (error) {
            reject(error);
          }
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  const socialMedia = [
    {
      name: "Facebook",
      icon: "akar-icons:facebook-fill",
      link: "https://www.facebook.com/bibekoliz",
      bgColor: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700"
    },
    {
      name: "Instagram",
      icon: "akar-icons:instagram-fill",
      link: "https://www.instagram.com/bibekoliz",
      bgColor: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700"
    },
    {
      name: "Twitter",
      icon: "akar-icons:twitter-fill",
      link: "https://twitter.com/bibekoliz",
      bgColor: "from-sky-400 to-blue-500",
      hoverColor: "hover:from-sky-500 hover:to-blue-600"
    },
    {
      name: "LinkedIn",
      icon: "akar-icons:linkedin-fill",
      link: "https://www.linkedin.com/in/bibekoli",
      bgColor: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800"
    },
    {
      name: "GitHub",
      icon: "akar-icons:github-fill",
      link: "https://github.com/bibekoli",
      bgColor: "from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-800 hover:to-black"
    },
  ];

  const contactInfo = [
    {
      icon: "material-symbols:alternate-email",
      label: "Email",
      value: "hello@bibekoli.com",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: "ic:round-location-on",
      label: "Location",
      value: "Kathmandu, Nepal",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!recaptchaSiteKey) {
      showToast({
        type: "error",
        title: "reCAPTCHA not configured",
        description: "Please contact the administrator.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const captchaToken = await executeRecaptcha();

      const response = await fetch("/api/contact-me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        showToast({
          type: "success",
          title: "Message sent",
          description:
            "Thank you! Your message has been sent successfully. I'll get back to you soon!",
        });
        // Reset form
        setFormData({ name: "", email: "", message: "" });
      } else {
        showToast({
          type: "error",
          title: "Failed to send",
          description:
            data.details
              ? data.details.join(", ")
              : data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      showToast({
        type: "error",
        title: "reCAPTCHA error",
        description:
          "Failed to verify reCAPTCHA. Please reload the page and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4" id="contact-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-quaternary mb-4">
            Get In Touch
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-accent rounded-full"></div>
            <p className="text-lg text-tertiary">Let&apos;s work together</p>
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-accent rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Contact Information & Social Media */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-quaternary mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg`}>
                      <Icon icon={info.icon} className="text-2xl text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-tertiary mb-1">{info.label}</p>
                      <p className="text-quaternary font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-quaternary mb-6">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialMedia.map((social) => (
                  <Link
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative bg-gradient-to-br ${social.bgColor} ${social.hoverColor} rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="relative flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <Icon icon={social.icon} className="text-2xl text-white" />
                      </div>
                      <span className="text-white font-semibold text-sm leading-tight">{social.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-fit">
            <h3 className="text-2xl font-bold text-quaternary mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Message */}
              

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-quaternary mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors duration-300 bg-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-quaternary mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors duration-300 bg-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-quaternary mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors duration-300 resize-none bg-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !isRecaptchaReady}
                className="w-full bg-accent text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:bg-accent-hover hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                {isSubmitting ? (
                  <>
                    <Icon icon="eos-icons:loading" className="text-xl animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Icon icon="akar-icons:send" className="text-xl" />
                  </>
                )}
              </button>

              <p className="text-xs text-tertiary/80 text-center leading-relaxed">
                This site is protected by reCAPTCHA and the Google
                {" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tertiary underline hover:text-quaternary transition-colors">
                  Privacy Policy
                </a>
                {" "}
                and
                {" "}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tertiary underline hover:text-quaternary transition-colors">
                  Terms of Service
                </a>
                {" "}
                apply.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
