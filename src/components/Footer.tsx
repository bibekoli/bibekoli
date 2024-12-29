import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <footer className="relative bg-gradient-to-tr from-indigo-500 via-purple-500 to-blue-500 text-primary py-12 pb-[100px] md:pb-[110px] overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 bg-indigo-400 opacity-10 rounded-full animate-pulse-slow top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-purple-300 opacity-20 rounded-full animate-bounce-slow bottom-20 right-20"></div>
        <div className="absolute w-80 h-80 bg-blue-400 opacity-15 rounded-full animate-rotate-slow top-40 right-40"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="text-center md:text-left">
          <h3 className="text-2xl font-semibold">Bibek Oli</h3>
          <p className="text-sm mt-2">Full Stack Developer</p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}>
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
        </motion.div>
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        className="border-t border-transparent my-8 origin-left"
      ></motion.div>

      {/* Footer Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
        className="text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Bibek Oli</span>. All rights reserved.
        </p>
        <br />
      </motion.div>
    </footer>
  );
}
