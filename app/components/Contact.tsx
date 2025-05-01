"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32 bg-[--background] text-[--foreground]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Title only */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
            Feel free to reach out for collaborations, questions, or opportunities. I’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Right: Contact form */}
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          ></textarea>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              e.currentTarget.closest("form")?.requestSubmit();
            }}
            className="inline-block w-full md:w-auto px-6 py-3 bg-[--accent] text-white font-medium rounded-md text-center hover:opacity-90 transition"
          >
            Send Message
          </a>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <div className="flex justify-center gap-6 mb-2">
          <a
            href="mailto:your.email@example.com"
            className="hover:text-[--accent]"
          >
            <FaEnvelope size={18} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[--accent]"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[--accent]"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
        Cemal Enes Durak © 2025
      </footer>
    </section>
  );
}
