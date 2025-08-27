"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/70 backdrop-blur-md shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name - Always Visible */}
        <h1 className="font-bold text-sky-400 text-xl">Apurv Sinha</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-slate-200">
          {["home", "about", "projects", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer capitalize hover:text-sky-400 transition-colors"
            >
              {section}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (Right Side) */}
        <button
          className="text-slate-200 md:hidden text-2xl"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900/95 backdrop-blur-md shadow-lg px-6 py-4 space-y-4">
          {["home", "about", "projects", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              duration={600}
              offset={-80}
              className="block cursor-pointer capitalize text-slate-200 hover:text-sky-400 transition-colors"
              onClick={() => setMenuOpen(false)} // close after click
            >
              {section}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
