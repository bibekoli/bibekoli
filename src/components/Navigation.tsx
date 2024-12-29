import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useEffect } from "react";
import Random from "@/components/Random";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const sections = [
      { id: "home", offset: 0 },
      { id: "about" },
      { id: "skills-section" },
      { id: "projects-section" },
      { id: "contact-section" },
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowNav(scrollY > 50);

      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top <= 150) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (section: string) => activeSection === section;

  return (
    <>
      <Random open={isOpen} setOpen={setIsOpen} />
      <div
        className={`fixed bottom-0 left-0 right-0 md:bottom-4 md:left-1/2 md:transform md:-translate-x-1/2 md:rounded-full bg-primary py-4 shadow-lg z-50 md:w-auto md:max-w-[550px] h-[72px] px-4
          ${showNav ? "transform translate-y-0 opacity-100" : "transform translate-y-full opacity-0"}
          transition-transform duration-300 ease-in-out`}
        style={{
          boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.2)",
        }}>
        <div className="max-w-screen-sm mx-auto flex justify-around items-center">
          <button
            className={`flex flex-col items-center text-sm ${
              isActive("home") ? "font-bold" : "hover:font-bold"
            }`}
            onClick={() => {
              const homeSection = document.getElementById("home");
              if (homeSection) homeSection.scrollIntoView({ behavior: "smooth" });
            }}>
            <Icon icon="akar-icons:person" className="text-2xl" />
            <span>About</span>
          </button>
          <button
            className={`flex flex-col items-center text-sm ${
              isActive("skills-section") ? "font-bold" : "hover:font-bold"
            }`}
            onClick={() => {
              const skillsSection = document.getElementById("skills-section");
              if (skillsSection) skillsSection.scrollIntoView({ behavior: "smooth" });
            }}>
            <Icon icon="material-symbols:mindfulness-outline-rounded" className="text-2xl" />
            <span>Skills</span>
          </button>
          <button
            className={`flex flex-col items-center text-sm ${
              isActive("projects-section") ? "font-bold" : "hover:font-bold"
            }`}
            onClick={() => {
              const projectsSection = document.getElementById("projects-section");
              if (projectsSection) projectsSection.scrollIntoView({ behavior: "smooth" });
            }}>
            <Icon icon="akar-icons:folder" className="text-2xl" />
            <span>Projects</span>
          </button>
          <button
            className={`flex flex-col items-center text-sm ${
              isActive("contact-section") ? "font-bold" : "hover:font-bold"
            }`}
            onClick={() => {
              const contactSection = document.getElementById("contact-section");
              if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
            }}>
            <Icon icon="akar-icons:envelope" className="text-2xl" />
            <span>Contact</span>
          </button>
          <button
            className="flex flex-col items-center text-sm hover:font-bold"
            onClick={() => {
              setIsOpen(true);
            }}>
            <Icon icon="humbleicons:bulb" className="text-2xl" />
            <span>Random</span>
          </button>
        </div>
      </div>
    </>
  );
}
