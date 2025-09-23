import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react"; // icons
import Profile from "../assets/profile.jpg"; // profile image
import { Figma, Image, Edit3, Layout, Feather, Camera } from "lucide-react"; // Added skill icons
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiCoreldraw,
  SiFigma,
  SiAdobeindesign,
  SiBlender,
  SiCanva
} from "react-icons/si";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-gradient-to-br from-purple-50 to-yellow-50 py-20 overflow-hidden">
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-10 -left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 -right-10 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        
        {/* Profile Image with Hover Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-yellow-400 relative">
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-30 blur-2xl -z-10"></div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I’m a <span className="font-semibold text-yellow-500">Creative Designer </span> 
            who blends <span className="font-semibold">art & technology</span> to craft 
            stunning, interactive, and user-friendly designs. My vision is to turn 
            complex ideas into <span className="italic">simple & aesthetic visuals</span> 
            that inspire people.
          </p>

          {/* Skills */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
<ul className="grid grid-cols-5 md:grid-cols-9 gap-8 justify-items-center mt-6">
  {/* Photoshop */}
  <motion.li
    whileHover={{ scale: 1.2 }}
    className="relative w-16 h-16 flex items-center justify-center"
  >
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 opacity-20 blur-2xl animate-pulse -z-10"></div>
    <SiAdobephotoshop
      size={48}
      style={{ fill: "url(#gradient)" }}
    />
  </motion.li>

  {/* Illustrator */}
  <motion.li
    whileHover={{ scale: 1.2 }}
    className="relative w-16 h-16 flex items-center justify-center"
  >
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 opacity-20 blur-2xl animate-pulse -z-10"></div>
    <SiAdobeillustrator size={48} style={{ fill: "url(#gradient)" }} />
  </motion.li>

  {/* After Effects */}
  <motion.li
    whileHover={{ scale: 1.2 }}
    className="relative w-16 h-16 flex items-center justify-center"
  >
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 opacity-20 blur-2xl animate-pulse -z-10"></div>
    <SiAdobeaftereffects size={48} style={{ fill: "url(#gradient)" }} />
  </motion.li>

  {/* Premiere Pro */}
  <motion.li
    whileHover={{ scale: 1.2 }}
    className="relative w-16 h-16 flex items-center justify-center"
  >
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 opacity-20 blur-2xl animate-pulse -z-10"></div>
    <SiAdobepremierepro size={48} style={{ fill: "url(#gradient)" }} />
  </motion.li>

  {/* CorelDRAW */}
  <motion.li
    whileHover={{ scale: 1.2 }}
    className="relative w-16 h-16 flex items-center justify-center"
  >
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 opacity-20 blur-2xl animate-pulse -z-10"></div>
    <SiCoreldraw size={48} style={{ fill: "url(#gradient)" }} />
  </motion.li>

  {/* Figma */}
  <motion.li
    whileHover={{ scale: 1.2 }}
    className="relative w-16 h-16 flex items-center justify-center"
  >
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 opacity-20 blur-2xl animate-pulse -z-10"></div>
    <SiFigma size={48} style={{ fill: "url(#gradient)" }} />
  </motion.li>

  {/* InDesign */}
  <motion.li
    whileHover={{ scale: 1.2 }}
    className="relative w-16 h-16 flex items-center justify-center"
  >
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 opacity-20 blur-2xl animate-pulse -z-10"></div>
    <SiAdobeindesign size={48} style={{ fill: "url(#gradient)" }} />
  </motion.li>

  {/* Blender */}
  <motion.li
    whileHover={{ scale: 1.2 }}
    className="relative w-16 h-16 flex items-center justify-center"
  >
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 opacity-20 blur-2xl animate-pulse -z-10"></div>
    <SiBlender size={48} style={{ fill: "url(#gradient)" }} />
  </motion.li>

  {/* Canva */}
  <motion.li
    whileHover={{ scale: 1.2 }}
    className="relative w-16 h-16 flex items-center justify-center"
  >
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 opacity-20 blur-2xl animate-pulse -z-10"></div>
    <SiCanva size={48} style={{ fill: "url(#gradient)" }} />
  </motion.li>

  {/* SVG Gradient Definition */}
  <svg width="0" height="0">
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FACC15" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
  </svg>
</ul>



          {/* Buttons + Socials */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <motion.a
              href="./rahul_cv.pdf"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </motion.a>
            <div className="flex justify-center sm:justify-start gap-4 text-gray-600">
              <a href="#" className="hover:text-black"><Github size={28} /></a>
              <a href="#" className="hover:text-blue-600"><Linkedin size={28} /></a>
              <a href="#" className="hover:text-pink-500"><Instagram size={28} /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
