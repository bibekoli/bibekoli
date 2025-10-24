import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Projects() {
  const projects = [
    {
      name: "BechnuParyo",
      description: "A P2P buying and selling platform connecting sellers and buyers without any middleman.",
      image: "bechnuparyo.png",
      url: "https://bechnuparyo.bibekoli.com",
      techStack: ["Next.js", "MongoDB", "Socket.io", "Tailwind CSS"]
    },
    {
      name: "EC Admin",
      description: "An admin dashboard for an e-commerce platform to manage products, orders, and users.",
      image: "ec-admin.png",
      url: "https://app.arocel.com",
      techStack: ["TypeScript", "Next.js", "MongoDB", "Material UI"]
    },
    {
      name: "EC Buyer",
      description: "A buyer dashboard for an e-commerce platform to view products, add to cart, and place orders.",
      image: "ec-buyer.png",
      url: "https://bibekcollexn.arocelshop.com",
      techStack: ["TypeScript", "Next.js", "MongoDB", "Tailwind CSS"]
    },
    {
      name: "EC Landing Page",
      description: "A landing page for an e-commerce platform to showcase about the platform and its features.",
      image: "ec-landing-page.png",
      url: "https://arocel.com",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      name: "ResQnest",
      description: "A platform for connecting animal rescuers, adopters and rescue centers.",
      image: "resqnest.png",
      url: "https://resqnest.bibekoli.com",
      techStack: ["Next.js", "MongoDB", "Tailwind CSS"]
    },
    {
      name: "Sneakers",
      description: "An e-commerce platform for selling sneakers.",
      image: "sneakers.png",
      url: "https://sneakers.bibekoli.com",
      techStack: ["Next.js", "MongoDB", "Tailwind CSS"]
    }
  ];

  return (
    <section className="py-16 px-4" id="projects-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-quaternary mb-4">
            Featured Projects
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-accent rounded-full"></div>
            <p className="text-lg text-tertiary">Things I&apos;ve built</p>
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-accent rounded-full"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-accent/30">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
                <Image
                  width={1280}
                  height={720}
                  src={`/${project.image}`}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-quaternary mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-tertiary leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-quaternary mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-accent border border-accent/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-accent-hover hover:shadow-lg hover:scale-105">
                  <span>View Project</span>
                  <Icon 
                    icon="akar-icons:arrow-right" 
                    className="text-lg transition-transform duration-300 group-hover/btn:translate-x-1" 
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
