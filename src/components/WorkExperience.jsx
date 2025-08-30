"use client";

import { motion } from "framer-motion";

export default function WorkExperience() {
  const experiences = [
    {
      role: "Agentic AI Research Intern",
      company: "CodeApto",
      duration: "Aug 2025 - Present",
      details: [
        "Researching and developing agentic AI systems capable of autonomous reasoning and planning.",
        "Explored multi-agent frameworks and LLM orchestration for real-world problem-solving.",
        "Worked on integrating AI agents with external tools, APIs, and memory for task automation.",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "CodeApto",
      duration: "Jul 2024 - Feb 2025",
      details: [
        "Developed full-stack applications using the MERN Stack.",
        "Built and optimized scalable APIs and responsive frontends.",
        "Collaborated in an agile team environment and improved backend performance.",
      ],
    },
  ];

  return (
    <section id="work" className="w-full pt-[10px] pb-[40px] bg-white ">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 bg-clip-text text-transparent text-center"
      >
        Where I've Worked
      </motion.h2>

      {/* Timeline / Work List */}
      <div className="mt-12 max-w-4xl mx-auto flex flex-col gap-10 px-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              // 👇 fade-up for mobile, slide for desktop
              x: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              {exp.role}
            </h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              {exp.company} • {exp.duration}
            </p>
            <ul className="mt-3 list-disc list-outside pl-6 text-zinc-700 dark:text-zinc-300 space-y-1">
              {exp.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
