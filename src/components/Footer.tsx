import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function Footer() {
  const socialMedia = [
    {
      name: "Email",
      icon: "heroicons:envelope",
      link: "mailto:hello@bibekoli.com",
      color: "hover:text-red-600"
    },
    {
      name: "Facebook",
      icon: "akar-icons:facebook-fill",
      link: "https://www.facebook.com/bibekoliz",
      color: "hover:text-blue-600"
    },
    {
      name: "Instagram",
      icon: "akar-icons:instagram-fill",
      link: "https://www.instagram.com/bibekoliz",
      color: "hover:text-pink-600"
    },
    {
      name: "Twitter",
      icon: "akar-icons:twitter-fill",
      link: "https://twitter.com/bibekoliz",
      color: "hover:text-blue-400"
    },
    {
      name: "LinkedIn",
      icon: "akar-icons:linkedin-fill",
      link: "https://www.linkedin.com/in/bibekoli",
      color: "hover:text-blue-700"
    },
    {
      name: "GitHub",
      icon: "akar-icons:github-fill",
      link: "https://github.com/bibekoli",
      color: "hover:text-gray-900"
    },
  ];

  const quickLinks = [
    { name: "About", id: "home" },
    { name: "Skills", id: "skills-section" },
    { name: "Projects", id: "projects-section" },
    { name: "Contact", id: "contact-section" },
  ];

  return (
    <footer className="relative bg-white border-t border-gray-200 py-12 pb-24 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-quaternary mb-2">Bibek Oli</h3>
            <p className="text-tertiary mb-4">Full Stack Developer</p>
            <p className="text-sm text-tertiary">
              Building digital experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-quaternary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const section = document.getElementById(link.id);
                      if (section) section.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-tertiary hover:text-accent transition-colors duration-300">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-quaternary mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialMedia.map((social) => (
                <Link
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-tertiary ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}>
                  <Icon icon={social.icon} className="text-xl" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-tertiary">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-quaternary">Bibek Oli</span>. All rights reserved.
          </p>
          <p className="text-xs text-tertiary mt-2">&nbsp;</p>
        </div>
      </div>
    </footer>
  );
}
