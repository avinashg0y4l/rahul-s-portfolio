import { motion } from "framer-motion";
import Profile from "../assets/profile.jpg";
export default function PortfolioCard({ title, img, link }) {
  return (
    <motion.a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="relative block rounded-xl overflow-hidden shadow-lg group cursor-pointer"
    >
      {/* Image */}
      <motion.img
        src={Profile}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 bg-black/50 flex items-center justify-center text-center text-white px-4"
      >
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm tracking-wide">View Project</p>
      </motion.div>

      {/* Accent bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500" />
    </motion.a>
  );
}
