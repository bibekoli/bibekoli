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
      <nav
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
          showNav ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}>
        <div className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-full shadow-xl px-6 py-3">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              className={`group flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive("home") 
                  ? "text-accent" 
                  : "text-tertiary hover:text-quaternary hover:bg-secondary"
              }`}
              onClick={() => {
                const homeSection = document.getElementById("home");
                if (homeSection) homeSection.scrollIntoView({ behavior: "smooth" });
              }}>
              <Icon 
                icon="akar-icons:person" 
                className={`text-xl sm:text-2xl transition-transform duration-200 ${
                  isActive("home") ? "scale-110" : "group-hover:scale-110"
                }`} 
              />
              <span className={`text-xs font-medium hidden sm:block ${isActive("home") ? "font-semibold" : ""}`}>
                About
              </span>
            </button>
            
            <div className="w-px h-8 bg-gray-200"></div>
            
            <button
              className={`group flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive("skills-section") 
                  ? "text-accent" 
                  : "text-tertiary hover:text-quaternary hover:bg-secondary"
              }`}
              onClick={() => {
                const skillsSection = document.getElementById("skills-section");
                if (skillsSection) skillsSection.scrollIntoView({ behavior: "smooth" });
              }}>
              <Icon 
                icon="material-symbols:mindfulness-outline-rounded" 
                className={`text-xl sm:text-2xl transition-transform duration-200 ${
                  isActive("skills-section") ? "scale-110" : "group-hover:scale-110"
                }`} 
              />
              <span className={`text-xs font-medium hidden sm:block ${isActive("skills-section") ? "font-semibold" : ""}`}>
                Skills
              </span>
            </button>
            
            <div className="w-px h-8 bg-gray-200"></div>
            
            <button
              className={`group flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive("projects-section") 
                  ? "text-accent" 
                  : "text-tertiary hover:text-quaternary hover:bg-secondary"
              }`}
              onClick={() => {
                const projectsSection = document.getElementById("projects-section");
                if (projectsSection) projectsSection.scrollIntoView({ behavior: "smooth" });
              }}>
              <Icon 
                icon="akar-icons:folder" 
                className={`text-xl sm:text-2xl transition-transform duration-200 ${
                  isActive("projects-section") ? "scale-110" : "group-hover:scale-110"
                }`} 
              />
              <span className={`text-xs font-medium hidden sm:block ${isActive("projects-section") ? "font-semibold" : ""}`}>
                Projects
              </span>
            </button>
            
            <div className="w-px h-8 bg-gray-200"></div>
            
            <button
              className={`group flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive("contact-section") 
                  ? "text-accent" 
                  : "text-tertiary hover:text-quaternary hover:bg-secondary"
              }`}
              onClick={() => {
                const contactSection = document.getElementById("contact-section");
                if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
              }}>
              <Icon 
                icon="akar-icons:envelope" 
                className={`text-xl sm:text-2xl transition-transform duration-200 ${
                  isActive("contact-section") ? "scale-110" : "group-hover:scale-110"
                }`} 
              />
              <span className={`text-xs font-medium hidden sm:block ${isActive("contact-section") ? "font-semibold" : ""}`}>
                Contact
              </span>
            </button>
            
            <div className="w-px h-8 bg-gray-200"></div>
            
            <button
              className="group flex flex-col items-center gap-1 px-3 py-2 rounded-lg text-tertiary hover:text-quaternary hover:bg-secondary transition-all duration-200"
              onClick={() => {
                setIsOpen(true);
              }}>
              <Icon 
                icon="humbleicons:bulb" 
                className="text-xl sm:text-2xl transition-transform duration-200 group-hover:scale-110" 
              />
              <span className="text-xs font-medium hidden sm:block">
                Random
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
