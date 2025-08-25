"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect scroll to add shadow / shrink
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full top-0 z-50 px-6 py-4 transition-all ${
        scrolled ? "bg-gray-900 shadow-xl py-3" : "bg-gray-900"
      }`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto text-white">
        {/* Logo / Brand */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          Designer <span className="text-blue-400">Portfolio</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {["projects", "about", "contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={`#${item}`}
                className="hover:text-blue-400 transition-all"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-gray-800 backdrop-blur-sm rounded-lg shadow-lg p-4 space-y-4"
          >
            {["projects", "about", "contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                onClick={toggleMenu}
                whileHover={{ scale: 1.05, x: 5 }}
                className="block text-white hover:text-blue-400 transition-all font-medium"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
