"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-zinc-900 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
      >
        Hi 👋 I’m <span className="font-semibold text-white">Apurv Sinha</span>, 
        a passionate developer focused on building{" "}
        <span className="text-sky-400">modern web</span> and{" "}
        <span className="text-sky-400">blockchain solutions</span>.  
        I enjoy crafting clean, efficient, and scalable applications with 
        <span className="font-semibold"> Next.js</span>, 
        <span className="font-semibold"> React</span>, 
        <span className="font-semibold"> Tailwind CSS</span>, and 
        <span className="font-semibold"> Solidity</span>.
      </motion.p>
    </section>
  );
}
