"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Elevate BPM",
    subtitle: "Featured Project",
    description:
      "A Business Process Management (BPM) platform built to streamline workflows and improve organizational efficiency. It provides tools for process automation, team collaboration, and performance tracking with a modern UI. The platform focuses on scalability, smooth navigation, and data-driven insights for businesses to optimize their operations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/Elevate.png",
    // github: "https://github.com",
    site: "https://elevate-v2.vercel.app/",
  },
  {
    title: "CrypTransfer",
    subtitle: "Featured Project",
    description:
      "A decentralized Web3 application (dApp) that allows users to securely transfer any ERC-20 tokens or ETH between wallets. Built with React, Web3.js, and smart contracts, CrypTransfer ensures trustless, transparent, and gas-optimized transactions. It features a simple and user-friendly interface, making crypto transfers seamless for beginners and professionals alike.",
    tech: ["React.js", "Tailwind CSS", "Javascript","Metamask"],
    image: "/crypTransfer.jpeg",
    github: "https://github.com/xeylous/CrypTransfer",
    site: "https://cryp-transfer.vercel.app/",
  },
  {
    title: "Telaiya Tourism",
    subtitle: "Featured Project",
    description:
      "A tourism website designed to promote Telaiya Dam and surrounding attractions in Jharkhand. It showcases destinations, activities, and travel information with a visually appealing and responsive design. The site aims to enhance local tourism by offering an engaging platform for visitors to explore natural beauty, history, and cultural richness of the region.Infact this is my first website i made while learning Reactjs.",
    tech: ["React.js", "MongoDB", "Tailwind CSS"],
    image: "/TelaiyaTourism.png",
    github: "https://github.com/xeylous/TelaiyaTourism",
    site: "https://telaiya-tourism.vercel.app/",
  },
];

export default function FeaturedProjects() {
  const [overlayVisible, setOverlayVisible] = useState(true);

  useEffect(() => {
    let timer;
    if (!overlayVisible) {
      timer = setTimeout(() => setOverlayVisible(true), 1500);
    }
    return () => clearTimeout(timer);
  }, [overlayVisible]);

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setOverlayVisible(false);
    }
  };

  return (
    <section className="w-full bg-white py-5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl pb-7 sm:text-5xl font-extrabold text-center bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 bg-clip-text text-transparent mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="flex flex-col space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <div
                className="relative w-full md:w-1/2 h-72 md:h-96 rounded-xl overflow-hidden shadow-lg border border-zinc-200 bg-zinc-100 group"
                onClick={handleClick}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-left transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-teal-600/60 transition-opacity duration-700 
                    ${overlayVisible ? "opacity-100" : "opacity-0"} 
                    md:group-hover:opacity-0`}
                ></div>
              </div>

              {/* CONTENT */}
              <div className="w-full md:w-1/2 space-y-4">
                <p className="text-teal-600 text-sm uppercase tracking-wide">
                  {project.subtitle}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-800">
                  {project.title}
                </h3>
                <div className="bg-zinc-100 rounded-lg p-5 shadow-inner">
                  <p className="text-zinc-700 leading-relaxed" style={{ fontFamily: "Delius" }}>
                    {project.description}
                  </p>
                </div>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3 pt-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-zinc-200 text-zinc-700 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex items-center gap-6 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-zinc-700 hover:text-zinc-900 transition"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {project.site && (
                    <a
                      href={project.site}
                      target="_blank"
                      className="px-5 py-2 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition text-sm"
                    >
                      Visit Site ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
