// components/Hero.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Hi, I’m <span className="text-indigo-400">Xeylous</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl max-w-2xl mb-8 text-gray-300"
      >
        A Computer Science student passionate about{" "}
        <span className="text-indigo-400">Web Development</span> &{" "}
        <span className="text-indigo-400">Blockchain</span>. I love building
        modern apps with Next.js, React, and MERN.
      </motion.p>

      <div className="flex gap-4">
        <Link
          href="#projects"
          className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl shadow-md transition"
        >
          View Projects
        </Link>
        <Link
          href="#contact"
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl shadow-md transition"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
