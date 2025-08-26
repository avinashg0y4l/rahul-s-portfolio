import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react"; // icons
import Profile from "../assets/profile.jpg"; // profile image

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
            I’m a <span className="font-semibold text-yellow-500">Creative Designer</span> 
            who blends <span className="font-semibold">art & technology</span> to craft 
            stunning, interactive, and user-friendly designs. My vision is to turn 
            complex ideas into <span className="italic">simple & aesthetic visuals</span> 
            that inspire people.
          </p>

          {/* Skills */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            {["UI/UX Design", "Illustrations", "Brand Identity", "Photoshop", "Figma", "Motion Graphics"].map(
              (skill, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white px-5 py-3 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition"
                >
                  {skill}
                </motion.li>
              )
            )}
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
