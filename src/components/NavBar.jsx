import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import assets from "../assets/index.js";
import { useProfile } from "../context/profilecontext.jsx";

const navLinks = [
  { name: "Home", href: "#home", icon: assets.house },
  { name: "Projects", href: "#projects", icon: assets.project },
  { name: "About", href: "#about", icon: assets.about },
  { name: "Skills", href: "#about", icon: assets.skills },
  { name: "Contact", href: "#contact", icon: assets.contact },
];

export default function NavBar() {
  const { ham, setHam } = useProfile(); // Correct placement
  const { darkMode, setDarkMode} = useProfile();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const navRef = useRef(null);

  // Set dark mode class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Highlight active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section && section.offsetTop <= scrollPos) {
          setActive(link.name);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cursor-based background effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const background = useTransform(
    [x, y],
    ([xPos, yPos]) =>
      `radial-gradient(circle at ${xPos}px ${yPos}px, 
       rgba(56,182,255,0.08) 0%, 
       rgba(168,85,247,0.06) 50%, 
       rgba(0,0,0,0) 80%)`
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  // Glitch effect for logo
  const [glitch, setGlitch] = useState(false);
  const triggerGlitch = () => {
    setGlitch(true);
    setTimeout(() => setGlitch(false), 300);
  };

  return (
    <motion.nav
      ref={navRef}
      style={{ background }}
      className="fixed top-0 left-0 w-full z-50 shadow-sm dark:bg-[#0a0a0f]/80 backdrop-blur-md text-black"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 font-bold text-2xl font-poppins select-none"
          onMouseEnter={triggerGlitch}
        >
          <span
            className={`transition-all ${glitch ? "glitch" : ""} text-purple-400`}
            data-text="Sharan"
            style={{ letterSpacing: "0.05em" }}
          >
            Sharan
          </span>
          <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`group relative px-4 py-2 font-medium flex items-center gap-1 transition-colors duration-200 rounded-lg
                  ${
                    active === link.name
                      ? "bg-purple-800 text-white dark:bg-purple-400/20 dark:text-purple-100"
                      : "bg-gray-100 text-gray-800 dark:bg-[#23233a] dark:text-gray-200"
                  }
                  hover:bg-purple-700 hover:text-white dark:hover:bg-purple-400/30 dark:hover:text-purple-100
                `}
                onClick={() => setActive(link.name)}
              >
                {darkMode && (
                  <span className="text-base">
                    {typeof link.icon === "string" ? (
                      <img src={link.icon} alt={link.name} className="w-5 h-5 inline" />
                    ) : (
                      link.icon
                    )}
                  </span>
                )}
                {link.name}
                <span
                  className={`absolute left-2 right-2 -bottom-1 h-0.5 rounded transition-all duration-300 ${
                    active === link.name
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0"
                  } bg-gradient-to-r from-purple-400 to-purple-500`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Dark mode toggle */}
          <button
            aria-label="Toggle dark mode"
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            onClick={() => setDarkMode((d) => !d)}
          >
            {darkMode ? (
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                className="text-yellow-400"
              >
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                className="text-gray-200"
              >
                <path
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            )}
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden ml-2 z-50 relative w-8 h-8"
            aria-label="Toggle menu"
            onClick={() => {
              setMenuOpen((open) => !open);
              setHam(!menuOpen); // Sync ham with menuOpen's next state
            }}
          >
            <div className="w-full h-full flex flex-col justify-center items-center">
              <span
                className={`block h-0.5 w-6 rounded-full transition-all duration-300 bg-purple-400 ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full my-1.5 transition-all duration-300 bg-purple-400 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-full transition-all duration-300 bg-purple-400 ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-40 pt-24 bg-[#181824] dark:bg-[#0a0a0f]"
            onClick={() => {
              setMenuOpen(false);
              setHam(false);
            }}
          >
            <ul className="flex flex-col gap-2 w-full px-6">
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <a
                    href={link.href}
                    className={`flex items-center text-lg py-4 px-4 rounded-lg transition-colors
                      ${
                        active === link.name
                          ? "bg-gray-900 text-gray-100" // Very dark bg and light text for active
                          : "bg-gray-100 text-gray-800" // Light bg and dark text for inactive
                      }
                      hover:bg-gray-800 hover:text-white
                    `}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(link.name);
                      setMenuOpen(false);
                    }}
                  >
                    {darkMode && (
                      <span className="mr-3">
                        {typeof link.icon === "string" ? (
                          <img src={link.icon} alt={link.name} className="w-5 h-5" />
                        ) : (
                          link.icon
                        )}
                      </span>
                    )}
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}