"use client";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";

export default function SocialSection() {
  const socials = [
    { name: "GitHub", icon: <FaGithub />, link: "https://github.com/yourusername" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://linkedin.com/in/yourusername" },
    { name: "Twitter", icon: <FaTwitter />, link: "https://twitter.com/yourusername" },
    { name: "Instagram", icon: <FaInstagram />, link: "https://instagram.com/yourusername" },
    { name: "Discord", icon: <FaDiscord />, link: "https://discord.gg/yourinvite" },
    { name: "YouTube", icon: <FaYoutube />, link: "https://youtube.com/@yourusername" },
  ];

  return (
    <section className="w-full border-t border-black bg-white py-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-8">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 text-2xl hover:text-black transition-colors duration-300"
              aria-label={s.name}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
