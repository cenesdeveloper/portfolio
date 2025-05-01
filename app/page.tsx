import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[--background] text-[--foreground] dark:bg-[--background] dark:text-[--foreground]">
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

