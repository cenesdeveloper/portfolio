export default function Projects() {
    return (
      <section id="projects" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold">🧠 Resume Matcher API</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Matches resumes to job descriptions using OpenAI and ChromaDB.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold">📊 CS50 Finance Simulator</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Simulated stock trading app with Flask and SQLite.
            </p>
          </div>
        </div>
      </section>
    );
  }