import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function Footer() {
  const socialMedia = [
    {
      name: "GitHub",
      icon: "akar-icons:github-fill",
      link: "https://github.com/bibekoli"
    },
    {
      name: "LinkedIn",
      icon: "akar-icons:linkedin-fill",
      link: "https://www.linkedin.com/in/bibekoli",
    },
    {
      name: "Facebook",
      icon: "akar-icons:facebook-fill",
      link: "https://www.facebook.com/bibekoli28",
    },
    {
      name: "Instagram",
      icon: "akar-icons:instagram-fill",
      link: "https://www.instagram.com/ibibekol",
    },
  ];

  return (
    <footer className="bg-quaternary text-primary py-12 pb-[100px] md:pb-[110px]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Personal Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold">Bibek Oli</h3>
          <p className="text-sm mt-2">Full Stack Developer</p>
        </div>

        {/* Social Media Links */}
        <div>
          <ul className="flex space-x-6">
            {
              socialMedia.map((social, index) => (
                <li key={index}>
                  <Link
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-blue-500 transition-colors">
                    <Icon icon={social.icon} className="text-3xl" />
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-secondary my-8"></div>

      {/* Footer Text */}
      <div className="text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Bibek Oli</span>. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with ❤️ by <span className="font-semibold text-blue-500">Bibek Oli</span>
        </p>
      </div>
    </footer>
  );
}