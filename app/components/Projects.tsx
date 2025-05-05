"use client";
export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        <ProjectCard
          title="📚 Gamified Learning Platform"
          desc="Designed an interactive web app to enhance student engagement through gamification. Features include educational modules with point-based rewards, leaderboards, achievement badges, and a reward redemption system to make learning more enjoyable and motivating"
          github="https://github.com/DSC-McMaster-U/Gamified-Learning-Platform"
          skills={["Python", "Flask", "JavaScript", "HTML", "CSS"]}
        />

        <ProjectCard
          title="🗺️ Map-based Photo Album App"
          desc="Developed a Next.js map-based photo album app where users can drop pins, upload photos, and share memories using Mapbox GL JS."
          github="https://github.com/cenesdeveloper/We"
          live="https://map-photo-album.vercel.app"
          skills={["Next.js", "React", "TypeScript", "Mapbox"]}
        />

        <ProjectCard
          title="🕹️ Maze Solver"
          desc="Implemented Tremaux, BFS, and Right-hand algorithms to solve mazes and compare pathfinding strategies"
          github="https://github.com/cenesdeveloper/Maze-Solver"
          skills={["Java", "OOP", "Algorithms"]}
        />

        <ProjectCard
          title="🔒 Password Strength Analyzer"
          desc="A C program that analyzes password strength based on character types and length to help users build secure passwords"
          github="https://github.com/cenesdeveloper/Password-Strength-Analyzer"
          skills={["C", "Security", "CLI"]}
        />

        <ProjectCard
          title="📈 Stock Trading Web App"
          desc="A stock trading simulation app built with Python and Flask. Includes real-time quotes, portfolio management, and transaction history."
          github="https://github.com/cenesdeveloper/StockTrader"
          skills={["Python", "Flask", "SQLite", "Bootstrap"]}
        />

        <ProjectCard
          title="🌐 Personal Portfolio"
          desc="Built a personal portfolio using Next.js and Tailwind CSS to showcase my projects, experience, and skills in a responsive layout."
          github="https://github.com/cenesdeveloper/portfolio"
          live="https://cenesdeveloper.vercel.app"
          skills={["TypeScript", "Next.js", "Tailwind CSS"]}
        />
      </div>
    </section>
  );
}

// 🔧 Reusable Project Card Component
function ProjectCard({
  title,
  desc,
  github,
  live,
  skills,
}: {
  title: string;
  desc: string;
  github: string;
  live?: string;
  skills: string[];
}) {
  return (
    <div className="p-6 border border-gray-300 rounded-xl bg-white text-gray-800 shadow transition hover:scale-[1.02] hover:shadow-md">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-center gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black"
            aria-label="GitHub link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.089 3.292 9.395 7.865 10.925.575.105.786-.25.786-.556 0-.275-.01-1.004-.016-1.97-3.2.696-3.875-1.54-3.875-1.54-.523-1.328-1.278-1.682-1.278-1.682-1.045-.715.08-.7.08-.7 1.155.081 1.763 1.187 1.763 1.187 1.028 1.76 2.697 1.252 3.354.957.105-.744.402-1.252.731-1.54-2.555-.291-5.244-1.278-5.244-5.69 0-1.256.449-2.283 1.184-3.088-.119-.29-.513-1.462.112-3.048 0 0 .965-.31 3.162 1.179a10.98 10.98 0 0 1 2.878-.387c.976.004 1.96.132 2.878.387 2.195-1.49 3.158-1.18 3.158-1.18.627 1.587.233 2.76.114 3.05.738.804 1.182 1.83 1.182 3.087 0 4.423-2.695 5.396-5.26 5.683.414.355.78 1.062.78 2.14 0 1.545-.014 2.792-.014 3.172 0 .31.207.667.792.553C20.707 21.39 24 17.088 24 12 24 5.648 18.852.5 12 .5z" />
            </svg>
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600 text-2xl leading-none"
              aria-label="Live demo"
            >
              🌐
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-700 text-sm">{desc}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-2 py-1 bg-gray-200 text-gray-800 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
