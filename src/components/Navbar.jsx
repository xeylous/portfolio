"use client";

import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/70 backdrop-blur-md shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-sky-400">Apurv Sinha</h1>

        {/* Links */}
        <div className="flex gap-6 text-slate-200">
          {["home", "about", "projects", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              duration={600}
              offset={-80} // offset for sticky navbar
              className="cursor-pointer capitalize hover:text-sky-400 transition-colors"
            >
              {section}
            </Link>
          ))}

        </div>
      </div>
    </nav>
  );
}
