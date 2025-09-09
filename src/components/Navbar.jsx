"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Calendar, Image as ImageIcon } from "lucide-react";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-3/4 
                 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg 
                 px-6 py-3 flex items-center justify-between z-50 font-sans"
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800 tracking-wide">
        Logo
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-gray-700 text-lg">
        <a href="/#home" className="hover:text-blue-600 transition">Home</a>
        <a href="/#about" className="hover:text-blue-600 transition">About</a>
        <a href="/#services" className="hover:text-blue-600 transition">Services</a>
        <a href="/#projects" className="hover:text-blue-600 transition">Projects</a>
        <a href="/gallery" className="hover:text-blue-600 transition flex items-center gap-1">
          <ImageIcon size={18} /> Gallery
        </a>
      </div>

      {/* Appointment */}
      <a
        href="#appointment"
        className="hidden md:flex items-center gap-2 text-gray-800 
                   hover:text-blue-600 transition text-lg font-medium"
      >
        <Calendar size={20} /> Appointment
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-gray-800"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white/95 
                     backdrop-blur-md rounded-2xl mt-2 p-4 flex flex-col 
                     gap-4 shadow-md md:hidden"
        >
          <a href="/#home" className="hover:text-blue-600 transition">Home</a>
          <a href="/#about" className="hover:text-blue-600 transition">About</a>
          <a href="/#services" className="hover:text-blue-600 transition">Services</a>
          <a href="/#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="/gallery" className="flex items-center gap-2 hover:text-blue-600 transition">
            <ImageIcon size={18} /> Gallery
          </a>
          <a href="#appointment" className="flex items-center gap-2 hover:text-blue-600 transition">
            <Calendar size={18} /> Appointment
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
