import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const cursor = document.querySelector("#custom-cursor") as HTMLDivElement;

    const handleMouseMove = (event: MouseEvent) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-tr from-indigo-500 via-purple-500 to-blue-500 h-[100svh] flex flex-col justify-center items-center p-6">
      {/* Custom Cursor */}
      <div id="custom-cursor" className="pointer-events-none fixed top-0 left-0 w-12 h-12 bg-white opacity-30 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-300 ease-out hidden md:block"></div>

      {/* Animated Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-72 h-72 bg-indigo-400 opacity-20 rounded-full animate-pulse slow-animation"></div>
        <div className="absolute w-64 h-64 bg-purple-300 opacity-30 rounded-full bottom-10 right-10 animate-bounce"></div>
        <div className="absolute w-96 h-96 bg-blue-400 opacity-10 rounded-full top-20 right-20 animate-spin-slow"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="text-center p-8 rounded-2xl shadow-xl max-w-4xl bg-white/20 backdrop-blur-lg border border-white/30">
        {/* Profile Picture */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="bg-white p-1 rounded-full w-max mx-auto mb-4">
          <Image
            src="/me.jfif"
            alt="Bibek Oli"
            width={150}
            height={150}
            className="rounded-full w-[100px] sm:w-[150px] aspect-square"
          />
        </motion.div>

        {/* Name and Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.0, ease: "easeOut" }}
          className="text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
            Bibek Oli
          </h1>
          <p className="text-2xl mb-4 font-light text-gray-200">
            Full Stack Developer
          </p>
          <p className="text-lg max-w-3xl leading-relaxed text-gray-100">
            I am a full stack developer with experience in TypeScript, Next.js, React.js, and MongoDB. I am passionate about creating user-friendly, performant, and accessible applications. Currently pursuing a BCA degree at Mechi Multiple Campus.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          className="mt-6 flex justify-center gap-4">
          <Link
            href="/Bibek Oli Resume.pdf"
            className="flex items-center bg-purple-600 text-white py-3 px-3 rounded-lg shadow-lg hover:bg-purple-700 transition-all"
            target="_blank"
            rel="noopener noreferrer">
            <Icon icon="akar-icons:eye" className="mr-2 text-lg" />
            View Resume
          </Link>
          <button
            className="flex items-center bg-indigo-600 text-white py-3 px-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-all"
            onClick={() => {
              const contactSection = document.getElementById("contact-section");
              if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
            }}>
            <Icon icon="fluent:contact-card-20-regular" className="mr-2 text-lg" />
            Contact Me
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
