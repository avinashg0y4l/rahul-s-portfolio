import { motion } from "framer-motion";
import PortfolioCard from "./components/PortfolioCard.jsx";
import About from './components/About.jsx';
import Hero from './components/Hero.jsx';
import Contact from './components/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import project1 from "./assets/project1.jpg";
import { i, link } from "framer-motion/client";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";
export default function App() {
  const projects = [
    { title: "Khelo India", img: project1, link:"https://www.linkedin.com/posts/rahul-raj-051017211_kheloindia2025-graphicdesigner-proudmoment-activity-7330683069974122496-FRVI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADPGmcgBEOTYClP4Wl7Uaf659zNmwM7NqII"},
    { title: "Design 2", img: "https://via.placeholder.com/300" },
    { title: "Design 3", img: "https://via.placeholder.com/300" },
  ];

  return (
    <>
      <Navbar />
      <Hero />

      {/* Wrap remaining sections in gradient */}
      <div className="bg-gradient-to-br from-purple-50 to-yellow-50">
        <About />
        <Services />

        {/* Projects Section */}
        <section
          id="projects"
          className="relative py-20 overflow-hidden"
        >
          {/* Decorative Gradient Blobs */}
          <div className="absolute top-0 -left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 -right-10 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

          {/* Section Heading */}
          <h2 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">
            Projects 
            <span className="bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent ml-2">
              Showcase
            </span>
          </h2>

          {/* Project Cards Grid */}
          <div className="relative max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <PortfolioCard
                  title={proj.title}
                  img={proj.img}
                  link={proj.link}
                />
              </motion.div>
            ))}
          </div>
        </section>

        <Contact />
        <Footer />
      </div>
    </>
  );
}
