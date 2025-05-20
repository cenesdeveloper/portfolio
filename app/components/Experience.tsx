"use client";
import { useState } from "react";
import Image from "next/image";

type ExperienceItem = {
  title: string;
  desc: string;
  logo: string;
  details: string;
  period?: string;
  skills: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: "Software Development Engineer In Test @ RBC",
    desc: "Java, Selenium, Jenkins, Perfecto",
    logo: "/rbc.png",
    period: "Jan. 2025 – Sept. 2025",
    details: `• Developed 30+ Java Selenium test scripts for RBC Direct Investing to ensure functionality of homepage and account opening, improving test coverage

• Migrated 60+ test scripts from Selenium to an internal testing framework, reducing average test runtime by 80%, and configured automated Helios jobs to run testing scripts daily using GitHub Actions, resulting in faster feedback cycles and improved testing efficiency

• Identified, analyzed, and resolved errors across 250+ test cases, ensuring reliable execution of automated test scripts across 7+ projects by running Jenkins jobs and monitoring execution results through both Jenkins and Perfecto, resulting in a 75% increase in the number of passing test cases`,
    skills: ["Java", "Selenium", "Jenkins", "Perfecto"]
  },
  {
    title: "Software Engineer Intern @ AIModels Tech Inc.",
    desc: "Python, (LLMs), Machine Learning, Flask, OpenAI, ChromaDB, Docker, Docker Compose, Embeddings",
    logo: "/aimodels.png",
    period: "Feb. 2025 – Apr. 2025",
    details: `• Built a resume filtering API using OpenAI to extract candidate info, generate embeddings for semantic search, and store them in ChromaDB with Dockerized services

• Designed a candidate-job matching algorithm using ChromaDB’s vector search to return top 5 matches per job, with Redis caching to improve response time.

• Built Flask REST API endpoints to trigger asynchronous candidate-job matching tasks using Celery, and tested functionality with Postman`,
    skills: ["Python", "LLMs", "Flask", "OpenAI API", "ChromaDB", "Docker", "Docker Compose", "Redis", "Embeddings", "REST APIs"]
  },
  {
    title: "Software Engineer Intern @ A Round Entertainment",
    desc: "Express.js, React.js, Node.js, Firebase, Git, CSS, JavaScript",
    logo: "/around.jpg",
    period: "June 2024 – Sept. 2024",
    details: `• Developed the sign-in, registration, profile, and real estate listing pages for a real estate application using React, CSS, and JavaScript

• Developed and integrated backend functionalities for a real estate platform using Node.js, Express.js, and Firebase, creating API endpoints for the property listing page that allow users to submit property details

• Stored property information and image URLs in Firebase Firestore and used concurrent file processing, reducing server response time by 25%`,
    skills: ["React.js", "Node.js", "Express.js", "Firebase", "JavaScript", "CSS", "Git"]
  },
  {
    title: "Software Developer @ Google Developer Student Clubs McMaster University",
    desc: "Python, Flask, HTML, Figma, CSS",
    logo: "/gd.png",
    period: "Sept. 2023 - Apr. 2024",
    details: `• Developed a gamified learning platform using Python, Flask, JavaScript, and Bootstrap, featuring interactive modules, leaderboards, and achievement badges to enhance student engagement in technical subjects

• Created RESTful API endpoints with Flask to access to learning modules and lesson data, ensuring reliable content retrieval for users`,
    skills: ["Python", "Flask", "HTML", "CSS", "Figma"]
  }
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
            <span className="absolute -left-[9px] top-0.5 w-4 h-4 bg-black rounded-full border-2 border-black" />
            <div className="p-6 border border-gray-300 rounded-xl bg-white text-gray-800 shadow hover:scale-[1.02] hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3">
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
                    <p className="text-xs text-gray-500 truncate">
                      {exp.period}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 bg-gray-200 text-gray-800 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <span className="mt-2 inline-block text-sm text-gray-800 font-medium bg-gray-100 px-3 py-1 rounded-md w-max transition-colors hover:bg-gray-200">
                Click to learn more
              </span>

            </div>
          </div>
        ))}
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-white text-gray-800 p-6 md:p-8 rounded-xl border border-gray-300 shadow hover:shadow-md max-w-2xl w-full mx-4 min-h-[400px] max-h-[85vh] overflow-y-auto relative"
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
                <span className="text-sm text-gray-500">
                  {activeItem.period}
                </span>
              )}
            </div>

            <div className="text-sm whitespace-pre-wrap text-left leading-relaxed font-sans">
              {activeItem.details}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
