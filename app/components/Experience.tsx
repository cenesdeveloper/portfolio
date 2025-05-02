"use client";
import { useState } from "react";
import Image from "next/image";

type ExperienceItem = {
  title: string;
  desc: string;
  logo: string;
  details: string;
  period?: string;
};

const experiences: ExperienceItem[] = [
  {
    title: "Software Automation Analyst Intern @ RBC",
    desc: "Java, Selenium, Jenkins, Perfecto",
    logo: "/rbc.png",
    period: "Jan – Apr 2024",
    details: `• Created 40+ Selenium test cases for RBC Direct Investing\n• Migrated tests to internal framework for 66% faster runs\n• Debugged failures using Jenkins logs and Perfecto device cloud`,
  },
  {
    title: "AI Resume Matching Project",
    desc: "Flask API, OpenAI, ChromaDB, Docker",
    logo: "/aimodels.png",
    period: "Mar – Apr 2024",
    details: `• Extracted features from resumes using GPT-4\n• Stored embeddings in ChromaDB for vector search\n• Used Celery + Redis for async job matching`,
  },
  {
    title: "Web Dev Intern @ A Round Entertainment",
    desc: "React, Firebase, Git, daily standups",
    logo: "/around.jpg",
    period: "Sep – Dec 2023",
    details: `• Designed desktop/mobile views for real estate app\n• Integrated Firebase Auth & Firestore\n• Attended daily standups, used Git for collaboration`,
  },
  {
    title: "Software Developer @ Google Developer Student Clubs McMaster University",
    desc: "Flask, SQLite, Jinja, stock simulation",
    logo: "/gd.png",
    period: "Dec 2023",
    details: `• Implemented stock buy/sell and lookup\n• Used Jinja templates and Flask forms\n• Validated transactions and displayed history`,
  },
];

export default function Experience() {
  const [activeItem, setActiveItem] = useState<ExperienceItem | null>(null);

  return (
    <section id="experience" className="py-20 px-6 bg-[--background] text-[--foreground]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[--foreground]">Experience</h2>
        <div className="mt-2 mx-auto h-1 w-20 bg-black rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto relative border-l border-black">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="mb-10 pl-6 relative cursor-pointer"
            onClick={() => setActiveItem(exp)}
          >
            <span className="absolute -left-[9px] top-2 w-4 h-4 bg-black rounded-full border-2 border-black" />
            <div className="p-4 h-[150px] rounded-lg bg-[--card-bg] border border-gray-200 dark:border-gray-700 shadow hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src={exp.logo}
                  alt={exp.title}
                  width={64}
                  height={64}
                  className="object-contain max-w-[64px] max-h-[64px]"
                />
                <div className="flex flex-col overflow-hidden">
                  <h3 className="text-base font-semibold truncate">{exp.title}</h3>
                  {exp.period && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {exp.period}
                    </p>
                  )}
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug truncate">
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 p-5 rounded-xl max-w-md w-full mx-4 shadow-lg min-h-[320px] max-h-[70vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-6 text-gray-500 hover:text-red-500 text-2xl font-bold"
            >
              ×
            </button>

            <div className="flex flex-col items-center justify-center gap-2 mb-3 mt-2">
              <Image
                src={activeItem.logo}
                alt="logo"
                width={64}
                height={64}
                className="object-contain max-w-[64px] max-h-[64px]"
              />
              <h3 className="text-lg font-bold text-center">{activeItem.title}</h3>
              {activeItem.period && (
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {activeItem.period}
                </span>
              )}
            </div>

            <div className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap text-center">
              {activeItem.details}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
