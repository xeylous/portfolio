"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-white text-white"
    >
      {/* LEFT SIDE - Heading */}
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-10 md:mb-0"
      >
        ABOUT ME
      </motion.h2>

      {/* RIGHT SIDE - Introduction */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl flex flex-col gap-6 text-lg md:text-xl leading-relaxed"
      >
        <p>
          I am <span className="font-semibold text-sky-400">Apurv Sinha</span>, a{" "}
          <span className="font-semibold text-purple-400">
            Computer Science Engineering Student
          </span>{" "}
          from Jharkhand. Passionate about{" "}
          <span className="font-semibold text-pink-400">
            full-stack development
          </span>{" "}
          and{" "}
          <span className="font-semibold text-green-400">
            blockchain technology
          </span>
          , I love building creative and efficient web experiences.
        </p>

        <p>
          My goal is to craft{" "}
          <span className="font-semibold text-yellow-400">
            seamless digital solutions
          </span>{" "}
          while constantly exploring new technologies and ideas.
        </p>
      </motion.div>
    </section>
  );
}
