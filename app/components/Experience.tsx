"use client";
import { useState } from "react";
import Image from "next/image";

type ExperienceItem = {
  title: string;
  desc: string;
  logo: string;
  details: string;
};

const experiences: ExperienceItem[] = [
  {
    title: "Software Automation Analyst Intern @ RBC",
    desc: "Developed Selenium test scripts in Java. Used Jenkins and Perfecto.",
    logo: "/RBC.png",
    details: `• Created 40+ Selenium test cases for RBC Direct Investing\n• Migrated tests to internal framework for 66% faster runs\n• Debugged failures using Jenkins logs and Perfecto device cloud`,
  },
  {
    title: "AI Resume Matching Project",
    desc: "Flask API with OpenAI and ChromaDB. Fully Dockerized.",
    logo: "/resume-ai.png",
    details: `• Extracted features from resumes using GPT-4\n• Stored embeddings in ChromaDB for vector search\n• Used Celery + Redis for async job matching`,
  },
  {
    title: "Web Dev Intern @ A Round Entertainment",
    desc: "Frontend in React, backend in Firebase.",
    logo: "/around.png",
    details: `• Designed desktop/mobile views for real estate app\n• Integrated Firebase Auth & Firestore\n• Attended daily standups, used Git for collaboration`,
  },
  {
    title: "CS50 Final Project",
    desc: "Flask-based stock trading simulation with SQLite.",
    logo: "/cs50.png",
    details: `• Implemented stock buy/sell and lookup\n• Used Jinja templates and Flask forms\n• Validated transactions and displayed history`,
  },
];

export default function Experience() {
  const [activeItem, setActiveItem] = useState<ExperienceItem | null>(null);

  return (
    <section id="experience" className="py-20 px-6 bg-[--background] text-[--foreground]">
      <h2 className="text-4xl font-bold text-center mb-16 text-[--foreground]">Experience</h2>

      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {experiences.map((exp) => (
          <div key={exp.title}>
            <div
              onClick={() => setActiveItem(exp)}
              className="cursor-pointer h-[260px] flex flex-col justify-between p-6 rounded-2xl bg-[--card-bg] text-[--foreground] border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image src={exp.logo} alt={exp.title} width={40} height={40} className="rounded-md" style={{ objectFit: "contain" }}/>
                <h3 className="text-lg font-semibold">{exp.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-gray-900 p-10 rounded-2xl max-w-5xl w-full mx-4 shadow-lg h-[90vh] overflow-y-auto flex flex-col justify-start relative">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-6 text-gray-500 hover:text-red-500 text-2xl font-bold"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-center mb-6">{activeItem.title}</h3>
            <div className="flex-1 flex items-start justify-center">
              <pre className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 text-base leading-relaxed text-center max-w-3xl">
                {activeItem.details}
              </pre>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
