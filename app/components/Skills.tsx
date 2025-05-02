"use client";
import Image from "next/image";

const skills = [
  { name: "Python", logo: "/python.svg" },
  { name: "Java", logo: "/java.svg" },
  { name: "C", logo: "/c.svg" },
  { name: "JavaScript", logo: "/javascript.svg" },
  { name: "TypeScript", logo: "/typescript.svg" },
  { name: "React.js", logo: "/react.svg" },
  { name: "Node.js", logo: "/node.svg" },
  { name: "Flask", logo: "/flask.svg" },
  { name: "Express.js", logo: "/express.svg" },
  { name: "Tailwind", logo: "/tailwindcss.svg" },
  { name: "Next.js", logo: "/nextdotjs.svg" },
  { name: "SQL", logo: "/sqlite.svg" },
  { name: "Git", logo: "/git.svg" },
  { name: "Docker", logo: "/docker.svg" },
  { name: "Jenkins", logo: "/jenkins.svg" },
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