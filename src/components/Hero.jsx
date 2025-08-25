import { motion } from "framer-motion";
import GradientBlinds from "./GradientBlinds";
import Profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      
      {/* Gradient Background */}
      <div className="absolute inset-0 w-full h-full">
        <GradientBlinds
          gradientColors={["#FF9FFC", "#5227FF"]}
          angle={45}
          blindCount={12}
          className="gradient-blinds-canvas"
        />
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left: Intro Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-4 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I’m <span className="text-yellow-300">Rahul</span>
          </h1>
          <p className="text-lg md:text-xl max-w-md">
            A passionate <span className="font-semibold">Graphic Designer</span> 
            creating modern, interactive, and impactful designs that bring ideas to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            View My Work
          </motion.button>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 bg-white overflow-hidden rounded-full shadow-2xl border-4 border-yellow-300 relative">
            <img
              src={Profile}
              alt="Rahul"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
