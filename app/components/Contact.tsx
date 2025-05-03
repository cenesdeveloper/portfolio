"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(form.current!);
    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          alert("Message sent!");
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="px-6 py-32 bg-[--background] text-[--foreground]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Title and links */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
            Feel free to reach out for collaborations, questions, or opportunities. I’ll get back to you as soon as possible.
          </p>

          {/* Icons */}
          <div className="flex gap-6 mt-6">
            <a
              href="mailto:cenesdurak@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-[--accent] transition"
            >
              <FaEnvelope size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/cemalenesdurak/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-[--accent] transition"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        {/* Right: Contact form */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
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
          <input
            type="text"
            name="subject"
            placeholder="Subject"
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

          <button
            type="submit"
            className="inline-block w-full md:w-auto px-6 py-3 bg-[--accent] text-[--foreground] font-medium rounded-md text-center hover:bg-[--foreground] hover:text-[--background] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <div className="flex justify-center gap-6 mb-2">
          <a
            href="mailto:cenesdurak@gmail.com"
            className="hover:text-[--accent]"
          >
            <FaEnvelope size={18} />
          </a>
          <a
            href="https://github.com/cenesdeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[--accent]"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/cemalenesdurak/"
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
