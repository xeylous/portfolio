// components/About.jsx
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          About <span className="text-indigo-400">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          I’m <span className="text-indigo-400">Apurv Sinha</span>, a Computer
          Science student who loves building modern web apps and exploring{" "}
          <span className="text-indigo-400">Blockchain</span>. Skilled in
          Next.js, React, and MERN stack, I focus on creating{" "}
          <span className="text-indigo-400">aesthetic & functional</span>{" "}
          solutions for the web.
        </motion.p>
      </div>
    </section>
  );
}
