"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Photo } from "../../public/Photo.jpg";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center gap-5 px-10 py-5 md:py-24 bg-white "
    >
      {/* MOBILE - Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 bg-clip-text text-transparent text-center mb-6 md:hidden "
      >
        ABOUT ME
      </motion.h2>
      {/* LEFT SIDE - Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-shrink-0 items-center justify-center"
      >
        <Image
          src="/Photo.jpg"
          alt="Apurv Sinha"
          width={270}
          height={270}
          className="rounded-lg border-4 border-zinc-700 shadow-xl object-cover"
        />
      </motion.div>

      {/* RIGHT SIDE - Introduction */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl flex flex-col gap-4 text-3xl md:text-lg leading-relaxed text-zinc-700 "
        style={{ fontFamily: "Charm, cursive" }}
      >
        <p>
          I am <span className=" text-sky-500">Apurv Sinha</span>, a{" "}
          <span className=" text-purple-500">
            Computer Science Engineering Student
          </span>{" "}
          from Jharkhand. Passionate about{" "}
          <span className=" text-pink-500">
            full-stack development
          </span>{" "}
          and{" "}
          <span className=" text-green-500">
            blockchain technology
          </span>
          , I love building creative and efficient web experiences.
        </p>

        <p>
          My goal is to craft{" "}
          <span className=" text-yellow-500">
            seamless digital solutions
          </span>{" "}
          while constantly exploring new technologies and ideas. I believe in
          combining{" "}
          <span className=" text-indigo-500">innovation</span> with{" "}
          <span className=" text-red-500">simplicity</span> to deliver
          impactful products that make a difference.
        </p>

        <p className="hidden md:block lg:block">
          Beyond coding, I enjoy learning about{" "}
          <span className=" text-emerald-500">
            emerging technologies
          </span>
          , solving real-world problems through{" "}
          <span className=" text-orange-500">creative projects</span>,
          and sharing knowledge with peers. My curiosity and dedication push me
          to keep improving every day.
        </p>

        <p className="hidden md:block lg:block">
          In the future, I aspire to become a{" "}
          <span className=" text-blue-600">
            tech innovator and entrepreneur
          </span>{" "}
          who not only develops applications but also inspires others to dream,
          build, and grow.
        </p>
      </motion.div>
    </section>
  );
}
