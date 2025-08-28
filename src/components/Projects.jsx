"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiSolidity, SiTailwindcss } from "react-icons/si";
import Link from "next/link";

const projects = [
  {
    title: "PhishingShield Extension",
    slug: "phishingshield",
    description: "AI + Blockchain powered Chrome extension to detect phishing sites in real time.",
    tech: [SiNextdotjs, FaNodeJs, SiMongodb, SiSolidity],
  },
  {
    title: "NFTickets Platform",
    slug: "nftickets",
    description: "Decentralized NFT-based event ticketing platform with resale & transfers.",
    tech: [SiNextdotjs, SiSolidity, FaReact],
  },
  {
    title: "CrypTransfer",
    slug: "cryptransfer",
    description: "Decentralized cryptocurrency transfer platform with real-time tracking.",
    tech: [FaReact, FaNodeJs, SiMongodb, SiTailwindcss],
  },
  {
    title: "NiveshWise",
    slug: "niveshwise",
    description: "Investment guidance platform built with Next.js and Tailwind.",
    tech: [SiNextdotjs, SiTailwindcss],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white py-20 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
      >
        Projects
      </motion.h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-100 rounded-xl shadow-md p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>

            {/* Tech icons */}
            <div className="mt-4 flex gap-3 text-gray-700 text-xl">
              {project.tech.map((Icon, i) => (
                <Icon key={i} />
              ))}
            </div>

            {/* Link */}
            <Link
              href={`/projects/${project.slug}`}
              className="mt-6 inline-block text-sky-500 font-medium hover:underline"
            >
              View Details →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
