"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-20 bg-[--background] text-[--foreground]"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Info */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Cemal Enes Durak</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-xl">
            3rd-Year Software Engineering Student @ McMaster University
          </p>

          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-[--accent] transition"
            >
              <FaGithub size={26} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-[--accent] transition"
            >
              <FaLinkedin size={26} />
            </a>
          </div>

          <a
            href="#contact"
            className="inline-block px-8 py-3 text-lg bg-[--accent] text-[--foreground] rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-[--accent]/50"
          >
            Contact Me
          </a>
        </div>

        {/* Right: Profile image */}
        <div className="flex-shrink-0 md:-mt-64">
          <Image
            src="/profile.jpg"
            alt="Cemal Enes Durak"
            width={240}
            height={240}
            className="rounded-full shadow"
          />
        </div>
      </div>
    </section>
  );
}
