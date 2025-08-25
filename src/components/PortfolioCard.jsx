import { motion } from "framer-motion";

export default function PortfolioCard({ title, img, link }) {
  return (
    <motion.a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="relative block rounded-2xl overflow-hidden shadow-lg group cursor-pointer bg-white"
    >
      {/* Image */}
      <motion.img
        src={img}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 
                   flex flex-col items-center justify-center text-center text-white px-6"
      >
        <h3 className="text-2xl font-semibold tracking-wide drop-shadow-md">{title}</h3>
        <p className="mt-3 text-base font-light italic opacity-90">View Project</p>
      </motion.div>

      {/* Accent Gradient Border (Matches About Theme) */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500" />
    </motion.a>
  );
}
