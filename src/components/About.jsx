"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Photo } from "../../public/Photo.jpg";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="flex flex-col  justify-center  gap-5 px-10   py-5 md:pt-[30px] bg-white lg:pt-0 min-h-screen  "
    >
      {/* MOBILE - Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 bg-clip-text text-transparent text-center mb-0 sm:font-extrabold "
      >
        ABOUT ME
      </motion.h2>
      {/* LEFT SIDE - Image */}
      <div className="lg:flex lg:justify-center lg:pl-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className=" inset-x-0 top-0  flex justify-center my-3.5  "
        >
          <Image
            src="/Photo.jpg"
            alt="Apurv Sinha"
            width={250}
            height={100}
            className="rounded-lg border-4 border-zinc-700 shadow-xl object-cover h-[300px] w-80 object-top"
          />
        </motion.div>

        {/* RIGHT SIDE - Introduction */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-full flex flex-col gap-2 text-lg md:text-lg leading-relaxed text-zinc-700 text-center md:text-left md:px-20 md:pl-10"
          style={{ fontFamily: "Delius" }}
        >
          <p>
            Hello, I am <span className=" text-sky-500">Apurv Sinha</span>, a{" "}
            <span className=" text-purple-500">
              Computer Science Engineering Student
            </span>{""}
            . Passionate about{" "}
            <span className=" text-pink-500">full-stack development</span> and{" "}
            <span className=" text-green-500">blockchain technology</span>, I
            love building creative and efficient web experiences.
          </p>

          <p>
            My goal is to craft{" "}
            <span className=" text-yellow-500">seamless digital solutions</span>{" "}
            while constantly exploring new technologies and ideas. I believe in
            combining <span className=" text-indigo-500">innovation</span> with{" "}
            <span className=" text-red-500">simplicity</span> to deliver
            impactful products that make a difference.
          </p>

          <p className="hidden md:block lg:block">
            Beyond coding, I enjoy learning about{" "}
            <span className=" text-emerald-500">emerging technologies</span>,
            solving real-world problems through{" "}
            <span className=" text-orange-500">creative projects</span>, and
            sharing knowledge with peers. My curiosity and dedication push me to
            keep improving every day.
          </p>

          <p className="hidden md:block lg:block">
            In the future, I aspire to become a{" "}
            <span className=" text-blue-600">
              tech innovator and entrepreneur
            </span>{" "}
            who not only develops applications but also inspires others to
            dream, build, and grow.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 pt-3 text-sm sm:text-base text-zinc-600">
            <span className="before:content-['▸'] before:mr-2 text-zinc-600">
              NextJS
            </span>
            <span className="before:content-['▸'] before:mr-2 text-sky-500">
              ReactJS
            </span>
            <span className="before:content-['▸'] before:mr-2 text-pink-500">
              Tailwind
            </span>
            <span className="before:content-['▸'] before:mr-2 text-yellow-600">
              Typescript
            </span>
            <span className="before:content-['▸'] before:mr-2 text-zinc-700">
              Ethereum
            </span>
            <span className="before:content-['▸'] before:mr-2 text-slate-500">
              Solidity
            </span>
            <span className="before:content-['▸'] before:mr-2 text-lime-600">
              NodeJS
            </span>
            <span className="before:content-['▸'] before:mr-2 text-green-600">
              MongoDB
            </span>
            <span className="before:content-['▸'] before:mr-2 text-red-600">
              Redis
            </span>
            <span className="before:content-['▸'] before:mr-2 text-blue-600">
              Docker
            </span>
            <span className="before:content-['▸'] before:mr-2 text-orange-500">
              Metamask Integration
            </span>
            <span className="before:content-['▸'] before:mr-2 text-emerald-500 list-outside">
              Applied Cryptography
            </span>
          </div>
        </motion.div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl flex flex-col gap-6 text-base sm:text-lg md:text-xl leading-relaxed text-zinc-700"
        style={{ fontFamily: "Charm" }}
      >
        
            <p>
            Hello ,I am <span className="font-semibold text-sky-500">Apurv Sinha</span>, a{" "}
            <span className="font-semibold text-purple-500">
            Computer Science Engineering Student.
          </span>{" "}
          Passionate about{" "}
          <span className="font-semibold text-pink-500">
            full-stack development
          </span>{" "}
          and{" "}
          <span className="font-semibold text-green-500">
            blockchain technology
          </span>
          , I love building creative and efficient web experiences.
        </p>

       
        <p>
          My goal is to craft{" "}
          <span className="font-semibold text-yellow-500">
            seamless digital solutions
          </span>{" "}
          while constantly exploring new technologies and ideas. I believe in
          combining{" "}
          <span className="font-semibold text-indigo-500">innovation</span> with{" "}
          <span className="font-semibold text-red-500">simplicity</span> to
          deliver impactful products that make a difference.
        </p>

       
        <p className="hidden md:block">
          Beyond coding, I enjoy learning about{" "}
          <span className="font-semibold text-emerald-500">
            emerging technologies
          </span>
          , solving real-world problems through{" "}
          <span className="font-semibold text-orange-500">
            creative projects
          </span>
          , and sharing knowledge with peers. My curiosity and dedication push me
          to keep improving every day.
        </p>

        <p className="hidden md:block">
          In the future, I aspire to become a{" "}
          <span className="font-semibold text-blue-600">
            tech innovator and entrepreneur
          </span>{" "}
          who not only develops applications but also inspires others to dream,
          build, and grow.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 pt-6 text-sm sm:text-base text-zinc-600">
          <span className="before:content-['▸'] before:mr-2 text-sky-500">Golang</span>
          <span className="before:content-['▸'] before:mr-2 text-purple-500">PoS Blockchains</span>
          <span className="before:content-['▸'] before:mr-2 text-pink-500">Rust</span>
          <span className="before:content-['▸'] before:mr-2 text-green-500">Applied Cryptography</span>
          <span className="before:content-['▸'] before:mr-2 text-yellow-500">Kubernetes</span>
          <span className="before:content-['▸'] before:mr-2 text-indigo-500">Ethereum</span>
          <span className="before:content-['▸'] before:mr-2 text-red-500">Consensus Algorithms</span>
          <span className="before:content-['▸'] before:mr-2 text-emerald-500">Distributed Systems</span>
        </div>
      </motion.div> */}
    </section>
  );
}
