"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import devAnimation from "../../public/animation.json";

export default function Hero() {
  const [colorIndex, setColorIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const names = ["Apurv Sinha", "Xeylous"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % names.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const colors = [
    "text-pink-600", // Computer Science Student
    "text-blue-600", // Web Developer
    "text-green-600", // Blockchain Enthusiast
  ];

  const words = [
    "Computer Science Student",
    "Web Developer",
    "Blockchain Enthusiast",
  ];

  const variants = {
    hidden: { y: -100, opacity: 0, rotateX: 90 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: { y: 100, opacity: 0, rotateX: -90, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="home"
      className="flex flex-col-reverse min-h-screen md:flex-row items-center justify-between px-9 pb-10 sm:pt-2 md:8 lg:pt-14 bg-white"
    >
      {/* Left Side (Text) */}
      <div className="flex-1 text-center md:text-left mt-0 md:mt-0  md:ml-16 ">
        {/* Name */}
        <div className="sm:flex sm:justify-center md:justify-start lg:justify-start  sm:h-18 md:h-22  overflow-hidden  ">
          <motion.div
            key={index}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-4xl sm:text-4xl md:text-5xl md:pb-2 lg:text-6xl m-0 min-w-20 pb-2 font-extrabold text-zinc-900"
          >
            {names[index]}
          </motion.div>
        </div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl text-zinc-700  flex justify-center md:justify-start flex-wrap"
        >
          <span className="mr-2 pt-0">A passionate</span>
          <span className={colors[colorIndex]}>
            <Typewriter
              words={words}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
              onType={(count) => setColorIndex(count % words.length)}
            />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-3 text-sm sm:text-base md:text-lg italic text-zinc-900"
          style={{ fontFamily: "'Playwrite CA', cursive" }}
        >
          Turning ideas into reality, one line of code at a time.
        </motion.p>
        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start mt-6 space-x-5 text-3xl">
          <Link href="https://github.com/xeylous" target="_blank">
            <FaGithub className="text-gray-600 hover:text-black transition duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/apurvsinha2003/" target="_blank">
            <FaLinkedin className="text-gray-600 hover:text-blue-800 transition duration-300" />
          </Link>
          <Link href="https://twitter.com/xeylous" target="_blank">
            <FaXTwitter className="text-gray-600 hover:text-sky-700 transition duration-300" />
          </Link>
          <Link href="https://instagram.com/xeylous" target="_blank">
            <FaInstagram className="text-gray-600 hover:text-pink-700 transition duration-300" />
          </Link>
          <Link href="mailto:xeylous@gmail.com">
            <FaEnvelope className="text-gray-600 hover:text-red-700 transition duration-300" />
          </Link>
        </div>

        {/*Resume button */}
      <motion.a
        href="/Apurv_Sinha_Resume.pdf" // 👉 replace with your actual resume link or file
        // download
        target="_blank"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="inline-block mt-6 px-6 py-3 rounded-2xl bg-zinc-600 text-white font-semibold shadow-md hover:bg-zinc-800 hover:shadow-lg transition-all duration-300"
        // style={{ fontFamily: "'Playwrite CA', cursive" }}
      >
        Resume Here
      </motion.a>
      </div>
      

      {/* Right Side (Animation) */}
      <div className="flex-1 flex justify-center items-center h-[18rem] sm:h-[20rem] md:h-[26rem] lg:h-[30rem] lg:overflow-y-hidden">
        <Lottie
          animationData={devAnimation}
          loop={true}
          className="w-[220px] sm:w-[280px] md:w-[350px] lg:w-[460px] xl:w-[520px]"
        />
      </div>
    </section>
  );
}
