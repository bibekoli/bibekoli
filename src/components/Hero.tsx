import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const socialLinks = [
    { name: "GitHub", icon: "akar-icons:github-fill", link: "https://github.com/bibekoli" },
    { name: "LinkedIn", icon: "akar-icons:linkedin-fill", link: "https://www.linkedin.com/in/bibekoli" },
    { name: "Twitter", icon: "akar-icons:twitter-fill", link: "https://twitter.com/bibekoliz" },
    { name: "Instagram", icon: "akar-icons:instagram-fill", link: "https://www.instagram.com/bibekoliz" },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-96 h-96 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 rounded-full blur-3xl"></motion.div>
        <motion.div 
          animate={{ 
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-[10%] w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-full blur-3xl"></motion.div>
        <motion.div 
          animate={{ 
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] right-[20%] w-72 h-72 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl"></motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Right Column - Profile Image (Mobile First) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:hidden relative flex justify-center order-1">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative">
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10">
                  <Image
                    src="/me.jfif"
                    alt="Bibek Oli"
                    width={300}
                    height={300}
                    className="relative rounded-3xl shadow-2xl w-60 h-60 object-cover border-4 border-white/50"
                    priority
                  />
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-3 -right-3 bg-white rounded-2xl shadow-2xl p-3 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                      <Icon icon="heroicons:check-badge" className="text-xl text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-quaternary">5+ Years</p>
                      <p className="text-[10px] text-tertiary">Experience</p>
                    </div>
                  </div>
                </motion.div>

                {/* Tech Stack Indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -top-3 -left-3 bg-white rounded-2xl shadow-2xl p-2 border border-gray-100">
                  <div className="flex gap-1.5">
                    <Icon icon="vscode-icons:file-type-reactjs" className="text-2xl" />
                    <Icon icon="devicon:nextjs" className="text-2xl" />
                    <Icon icon="vscode-icons:file-type-node" className="text-2xl" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-quaternary">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-quaternary mb-4 leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Bibek Oli
              </span>
            </motion.h1>

            {/* Title with Animated Icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <Icon icon="heroicons:code-bracket" className="text-3xl text-accent" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-tertiary">
                Full Stack Developer
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg text-tertiary leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              I craft beautiful, performant, and accessible web applications with modern technologies. 
              Passionate about creating seamless user experiences and solving complex problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link
                href="/Bibek Oli Resume.pdf"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
                target="_blank"
                rel="noopener noreferrer">
                <span className="relative flex items-center gap-2">
                  <Icon icon="akar-icons:download" className="text-xl" />
                  Download Resume
                </span>
              </Link>
              <button
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-quaternary bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-accent"
                onClick={() => {
                  const contactSection = document.getElementById("contact-section");
                  if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
                }}>
                <Icon icon="akar-icons:paper-plane" className="mr-2 text-xl" />
                Let&apos;s Talk
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-sm font-medium text-tertiary">Connect:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center text-tertiary hover:text-accent hover:border-accent transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    <Icon icon={social.icon} className="text-xl" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:flex relative justify-center lg:justify-end order-3 lg:order-2">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative">
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10">
                  <Image
                    src="/me.jfif"
                    alt="Bibek Oli"
                    width={400}
                    height={400}
                    className="relative rounded-3xl shadow-2xl w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover border-4 border-white/50"
                    priority
                  />
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                      <Icon icon="heroicons:check-badge" className="text-2xl text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-quaternary">5+ Years</p>
                      <p className="text-xs text-tertiary">Experience</p>
                    </div>
                  </div>
                </motion.div>

                {/* Tech Stack Indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-2xl p-3 border border-gray-100">
                  <div className="flex gap-2">
                    <Icon icon="vscode-icons:file-type-reactjs" className="text-3xl" />
                    <Icon icon="devicon:nextjs" className="text-3xl" />
                    <Icon icon="vscode-icons:file-type-node" className="text-3xl" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none hidden sm:flex"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-tertiary font-medium">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-tertiary/30 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 bg-accent rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
