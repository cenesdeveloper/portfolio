export default function Projects() {
    return (
      <section id="projects" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
          
          {/* Project 1 */}
          <ProjectCard
            title="🧠 Resume Matcher API"
            desc="Built a Flask backend to match resumes to job descriptions using GPT-4 and ChromaDB. Dockerized for easy deployment."
            github="https://github.com/yourusername/resume-matcher"
          />
  
          {/* Project 2 */}
          <ProjectCard
            title="📊 CS50 Finance Simulator"
            desc="A stock trading simulation web app using Python, Flask, and SQLite. Users can quote, buy, sell, and track stocks."
            github="https://github.com/yourusername/cs50-finance"
          />
  
          {/* Project 3 */}
          <ProjectCard
            title="🕹️ Maze Solver"
            desc="Implemented BFS, Tremaux, and Right-Hand algorithms in Java to solve and visualize maze paths, comparing performance."
            github="https://github.com/yourusername/maze-solver"
          />
  
          {/* Project 4 */}
          <ProjectCard
            title="📝 Password Strength Analyzer"
            desc="Analyzed password strength in real time using JavaScript and regex rules, offering instant security suggestions."
            github="https://github.com/yourusername/password-analyzer"
          />
  
          {/* Project 5 */}
          <ProjectCard
            title="📚 Gamified Learning Web App"
            desc="Collaborated in a student-led team to build a learning platform with Flask, Bootstrap, and RESTful API endpoints."
            github="https://github.com/yourusername/gamified-learning"
          />
  
          {/* Project 6 */}
          <ProjectCard
            title="🏡 Real Estate App (Internship)"
            desc="Designed mobile and desktop views using React and integrated Firebase backend services including auth and listings."
            github="https://github.com/yourusername/real-estate-app"
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
  }: {
    title: string;
    desc: string;
    github: string;
  }) {
    return (
      <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 shadow transition hover:scale-[1.02] hover:shadow-md">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black dark:hover:text-white"
            aria-label="GitHub link"
          >
            {/* GitHub Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.089 3.292 9.395 7.865 10.925.575.105.786-.25.786-.556 0-.275-.01-1.004-.016-1.97-3.2.696-3.875-1.54-3.875-1.54-.523-1.328-1.278-1.682-1.278-1.682-1.045-.715.08-.7.08-.7 1.155.081 1.763 1.187 1.763 1.187 1.028 1.76 2.697 1.252 3.354.957.105-.744.402-1.252.731-1.54-2.555-.291-5.244-1.278-5.244-5.69 0-1.256.449-2.283 1.184-3.088-.119-.29-.513-1.462.112-3.048 0 0 .965-.31 3.162 1.179a10.98 10.98 0 0 1 2.878-.387c.976.004 1.96.132 2.878.387 2.195-1.49 3.158-1.18 3.158-1.18.627 1.587.233 2.76.114 3.05.738.804 1.182 1.83 1.182 3.087 0 4.423-2.695 5.396-5.26 5.683.414.355.78 1.062.78 2.14 0 1.545-.014 2.792-.014 3.172 0 .31.207.667.792.553C20.707 21.39 24 17.088 24 12 24 5.648 18.852.5 12 .5z" />
            </svg>
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
      </div>
    );
  }
  