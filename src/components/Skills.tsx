import { Icon } from "@iconify/react/dist/iconify.js";

export default function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: "skill-icons:javascript", status: "Experienced" },
        { name: "TypeScript", icon: "skill-icons:typescript", status: "Experienced" },
        { name: "Python", icon: "vscode-icons:file-type-python", status: "Intermediate" },
        { name: "Java", icon: "vscode-icons:file-type-java", status: "Intermediate" },
        { name: "PHP", icon: "vscode-icons:file-type-php", status: "Intermediate" },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: "vscode-icons:file-type-html", status: "Experienced" },
        { name: "CSS", icon: "vscode-icons:file-type-css", status: "Experienced" },
        { name: "JavaScript", icon: "skill-icons:javascript", status: "Experienced" },
        { name: "React.js", icon: "vscode-icons:file-type-reactjs", status: "Experienced" },
        { name: "Next.js", icon: "devicon:nextjs", status: "Experienced" },
        { name: "Redux", icon: "logos:redux", status: "Experienced" },
        { name: "Zustand", icon: "openmoji:bear", status: "Experienced" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "vscode-icons:file-type-node", status: "Experienced" },
        { name: "Express.js", icon: "skill-icons:expressjs-dark", status: "Intermediate" },
        { name: "NextAuth.js", icon: "tabler:error-404", status: "Experienced" },
        { name: "REST API", icon: "vscode-icons:file-type-rest", status: "Experienced" },
        { name: "Socket.io", icon: "devicon:socketio", status: "Intermediate" },
        { name: "GraphQL", icon: "vscode-icons:file-type-graphql", status: "Beginner" },
        { name: "Apollo Server", icon: "logos:apollostack", status: "Beginner" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: "skill-icons:mongodb", status: "Experienced" },
        { name: "Firebase", icon: "logos:firebase", status: "Intermediate" },
        { name: "MySQL", icon: "vscode-icons:file-type-mysql", status: "Intermediate" },
        { name: "PostgreSQL", icon: "devicon:postgresql", status: "Intermediate" },
        { name: "Redis", icon: "logos:redis", status: "Beginner" },
      ],
    },
    {
      title: "Mobile App Development",
      skills: [
        { name: "React Native", icon: "logos:react", status: "Intermediate" },
        { name: "Expo", icon: "simple-icons:expo", status: "Intermediate" },
        { name: "Java (Android)", icon: "vscode-icons:file-type-java", status: "Intermediate" },
      ],
    },
    {
      title: "UI Library",
      skills: [
        { name: "MUI", icon: "logos:material-ui", status: "Experienced" },
        { name: "Tailwind CSS", icon: "vscode-icons:file-type-tailwind", status: "Experienced" },
        { name: "React Native Paper", icon: "logos:react", status: "Experienced" },
        { name: "Shadcn UI", icon: "simple-icons:shadcnui", status: "Experienced" },
        { name: "Bootstrap", icon: "devicon:bootstrap", status: "Intermediate" },
      ],
    },
    {
      title: "UI/UX Design",
      skills: [
        { name: "Figma", icon: "logos:figma", status: "Intermediate" },
        { name: "Adobe Illustrator", icon: "skill-icons:illustrator", status: "Intermediate" },
        { name: "Photoshop", icon: "vscode-icons:file-type-photoshop", status: "Intermediate" },
        { name: "Canva", icon: "devicon:canva", status: "Experienced" },
      ],
    },
    {
      title: "API Design",
      skills: [
        { name: "REST API", icon: "vscode-icons:file-type-rest", status: "Experienced" },
        { name: "GraphQL", icon: "vscode-icons:file-type-graphql", status: "Beginner" },
        { name: "Express.js", icon: "skill-icons:expressjs-dark", status: "Intermediate" },
        { name: "Next.js", icon: "devicon:nextjs", status: "Experienced" },
        { name: "Apollo Server", icon: "logos:apollostack", status: "Beginner" },
        { name: "Postman", icon: "vscode-icons:file-type-postman", status: "Experienced" },
      ],
    }
  ];

  return (
    <div className="m-4 mt-8 rounded-2xl" id="skills-section">
      <h1 className="text-3xl font-bold text-center mb-6">Skills</h1>
      {
        skillGroups.map((group, index) => (
          <div key={index} className="">
            <h2 className="text-2xl font-semibold mb-4 border-b border-b-secondary pb-2 mt-4">{group.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {
                group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center p-4 rounded-2xl">
                    <Icon icon={skill.icon} className="text-4xl mb-2" />
                    <h3 className="text-lg font-medium text-center">{skill.name}</h3>
                    <span className="text-xs text-tertiary">{skill.status}</span>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  );
}
