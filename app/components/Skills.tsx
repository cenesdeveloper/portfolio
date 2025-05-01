"use client";
import Image from "next/image";

const skills = [
  { name: "Python", logo: "/logos/python.svg" },
  { name: "Java", logo: "/logos/java.svg" },
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "React.js", logo: "/logos/react.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
  { name: "Flask", logo: "/logos/flask.svg" },
  { name: "Express.js", logo: "/logos/express.svg" },
  { name: "Bootstrap", logo: "/logos/bootstrap.svg" },
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "SQL", logo: "/logos/sql.svg" },
  { name: "HTML", logo: "/logos/html.svg" },
  { name: "CSS", logo: "/logos/css.svg" },
  { name: "Git", logo: "/logos/git.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "Jenkins", logo: "/logos/jenkins.svg" },
  { name: "Firebase", logo: "/logos/firebase.svg" },
  { name: "Postman", logo: "/logos/postman.svg" },
  { name: "VS Code", logo: "/logos/vscode.svg" },
  { name: "IntelliJ", logo: "/logos/intellij.svg" },
  { name: "Jira", logo: "/logos/jira.svg" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-[--background] text-[--foreground]">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center">
        {skills.map(skill => (
          <div key={skill.name} className="flex flex-col items-center text-sm text-center">
            <div className="w-12 h-12 relative mb-2">
              <Image src={skill.logo} alt={skill.name} layout="fill" objectFit="contain" />
            </div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
