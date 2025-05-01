import Image from "next/image";
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
