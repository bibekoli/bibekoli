import { Icon } from "@iconify/react/dist/iconify.js";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  color: string;
  bgColor: string;
  iconColor: string;
  skills: Skill[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Technical Skills",
      subtitle: "Programming languages, frameworks, and development tools",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
      iconColor: "text-blue-600",
      skills: [
        { name: "JavaScript", icon: "skill-icons:javascript" },
        { name: "TypeScript", icon: "skill-icons:typescript" },
        { name: "React.js", icon: "vscode-icons:file-type-reactjs" },
        { name: "Next.js", icon: "devicon:nextjs" },
        { name: "Node.js", icon: "vscode-icons:file-type-node" },
        { name: "Python", icon: "vscode-icons:file-type-python" },
        { name: "Java", icon: "vscode-icons:file-type-java" },
        { name: "PHP", icon: "vscode-icons:file-type-php" },
        { name: "HTML5", icon: "vscode-icons:file-type-html" },
        { name: "CSS3", icon: "vscode-icons:file-type-css" },
        { name: "Tailwind CSS", icon: "vscode-icons:file-type-tailwind" },
        { name: "MongoDB", icon: "skill-icons:mongodb" },
        { name: "MySQL", icon: "vscode-icons:file-type-mysql" },
        { name: "PostgreSQL", icon: "devicon:postgresql" },
        { name: "Firebase", icon: "vscode-icons:file-type-firebase" },
        { name: "Redis", icon: "logos:redis" },
        { name: "Express.js", icon: "skill-icons:expressjs-dark" },
        { name: "REST API", icon: "vscode-icons:file-type-rest" },
        { name: "GraphQL", icon: "vscode-icons:file-type-graphql" },
        { name: "React Native", icon: "logos:react" },
        { name: "Redux", icon: "logos:redux" },
        { name: "Zustand", icon: "openmoji:bear" },
        { name: "MUI", icon: "logos:material-ui" },
        { name: "Shadcn UI", icon: "simple-icons:shadcnui" },
        { name: "Bootstrap", icon: "devicon:bootstrap" },
        { name: "React Native Paper", icon: "logos:react" },
        { name: "Figma", icon: "logos:figma" },
        { name: "Adobe Illustrator", icon: "skill-icons:illustrator" },
        { name: "Photoshop", icon: "vscode-icons:file-type-photoshop" },
        { name: "Canva", icon: "devicon:canva" },
        { name: "Git", icon: "logos:git-icon" },
        { name: "Docker", icon: "logos:docker-icon" },
        { name: "AWS", icon: "logos:aws" },
        { name: "Vercel", icon: "logos:vercel-icon" },
        { name: "Expo", icon: "simple-icons:expo" },
        { name: "Socket.io", icon: "devicon:socketio" },
        { name: "Apollo Server", icon: "logos:apollostack" },
        { name: "NextAuth.js", icon: "simple-icons:nextdotjs" },
        { name: "Postman", icon: "vscode-icons:file-type-postman" },
      ]
    },
    {
      title: "Soft Skills",
      subtitle: "Leadership, communication, and interpersonal abilities",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      iconColor: "text-emerald-600",
      skills: [
        { name: "Team Leadership", icon: "heroicons:user-group" },
        { name: "Communication", icon: "heroicons:chat-bubble-left-right" },
        { name: "Project Management", icon: "heroicons:clipboard-document-list" },
        { name: "Critical Thinking", icon: "heroicons:light-bulb" },
        { name: "Problem Solving", icon: "heroicons:puzzle-piece" },
        { name: "Team Collaboration", icon: "heroicons:users" },
        { name: "Mentoring & Coaching", icon: "heroicons:academic-cap" },
        { name: "Agile Development", icon: "heroicons:arrow-path" },
        { name: "Time Management", icon: "heroicons:clock" },
        { name: "Adaptability", icon: "heroicons:arrow-trending-up" },
        { name: "Creative Thinking", icon: "heroicons:sparkles" },
        { name: "Strategic Planning", icon: "heroicons:chart-bar-square" },
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-blue-50/30 to-white" id="skills-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-quaternary mb-4">
            Skills & Expertise
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-accent rounded-full"></div>
            <p className="text-lg text-tertiary">What I bring to the table</p>
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-accent rounded-full"></div>
          </div>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="group">
              {/* Category Header */}
              <div className={`relative overflow-hidden rounded-3xl ${category.bgColor} p-10 mb-8 border border-gray-100 shadow-xl transition-all duration-300 hover:shadow-2xl`}>
                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-3">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-xl`}>
                      <Icon 
                        icon={categoryIndex === 0 ? "heroicons:code-bracket" : "heroicons:sparkles"} 
                        className="text-3xl text-white" 
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-quaternary">
                        {category.title}
                      </h3>
                      <p className="text-sm text-tertiary mt-2">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative gradient */}
                <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${category.color} opacity-5 rounded-full blur-3xl`}></div>
              </div>

              {/* Skills Grid - More spacious */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group/skill relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border border-gray-100 hover:border-accent/40 shadow-sm">
                    <div className="relative mb-3">
                      <Icon 
                        icon={skill.icon} 
                        className="text-5xl sm:text-6xl transition-all duration-300 group-hover/skill:scale-110" 
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-quaternary text-center leading-tight">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
