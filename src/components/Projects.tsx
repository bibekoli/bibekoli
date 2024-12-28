import Image from "next/image";
import React from "react";

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
      url: "https://ec-admin.bibekoli.com",
      techStack: ["TypeScript, Next.js, MongoDB, Material UI"]
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
    <div className="p-4 m-4 bg-white rounded-2xl" id="projects-section">
      <h1 className="text-3xl font-bold text-center mb-6">Projects</h1>
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-4">
          {
            projects.map((project) => (
              <div
                key={project.name}
                className="bg-white rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <Image
                    width={1280}
                    height={720}
                    src={`/${project.image}`}
                    alt={project.name}
                    className="w-full md:w-1/2"
                  />
                  <div className="p-4 md:w-1/2">
                    <h2 className="text-lg font-semibold text-gray-800">{project.name}</h2>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                    <div className="mt-2">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Tech Stack</p>
                      <ul className="flex flex-wrap space-x-1">
                        {
                        project.techStack.map((tech, index) => (
                            <li
                              key={index}
                              className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                              {tech}
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block bg-quaternary text-white text-center py-2 px-4 rounded-full hover:bg-primary hover:text-quaternary">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
