// components/Projects.jsx
"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "PhishingShield",
    desc: "Chrome extension using AI + Blockchain to detect phishing websites.",
    link: "#",
  },
  {
    title: "NFTickets",
    desc: "Decentralized event ticketing platform with NFT integration.",
    link: "#",
  },
  {
    title: "Library Management System",
    desc: "MERN app with beautiful UI to manage library books.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="text-indigo-400">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg hover:bg-gray-700 transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">
                {p.title}
              </h3>
              <p className="text-gray-300">{p.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
