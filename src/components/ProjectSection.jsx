import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PortfolioCard from "./PortfolioCard.jsx";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpg";
import project_thumb1 from "../assets/gallery/project_thumbnail1.png";

export default function ProjectSection() {
  const projects = [
    {
      title: "Khelo India",
      img: project1,
      thumb: project_thumb1,
      link: "https://www.behance.net/gallery/214952319/Graphic-Design-Portfolio-2024",
      description:
        "This project showcases my first award-winning UI/UX design for Khelo India. Focused on vibrant visuals and intuitive layout.",
    },
    {
      title: "Design 2",
      img: project2,
      link: "https://www.linkedin.com/posts/rahul-raj-051017211_kheloindia2025-graphicdesigner-proudmoment-activity-7330683069974122496-FRVI",
      description:
        "This project focuses on motion graphics, micro-interactions, and branding design.",
    },
    {
      title: "Design 3",
      img: project3,
      link: "https://www.linkedin.com/posts/rahul-raj-051017211_kheloindia2025-graphicdesigner-proudmoment-activity-7330683069974122496-FRVI",
      description:
        "This project explores interactive UI design and illustrative storytelling.",
    },
    // Add more projects if needed
  ];

  const [activeProject, setActiveProject] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Responsive card count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1); // mobile
      else if (window.innerWidth < 1024) setCardsToShow(2); // tablet
      else setCardsToShow(3); // desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  const next = () => setStartIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setStartIndex((prev) => (prev - 1 + projects.length) % projects.length);

  // Get the visible cards
  const visibleProjects = [];
  for (let i = 0; i < cardsToShow; i++) {
    visibleProjects.push(projects[(startIndex + i) % projects.length]);
  }

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 -left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 -right-10 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse" />

      {/* Section Heading */}
      <h2 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">
        Projects{" "}
        <span className="bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent ml-2">
          Showcase
        </span>
      </h2>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 flex items-center">
        {/* Prev Button */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-0 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition z-10"
        >
          <ChevronLeft className="text-gray-800" />
        </button>

        <div className="flex overflow-hidden w-full gap-6">
          {visibleProjects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="flex-1 cursor-pointer"
              onClick={() => setActiveProject(proj)}
            >
              <PortfolioCard title={proj.title} img={proj.img} />
            </motion.div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute right-4 md:right-0 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition z-10"
        >
          <ChevronRight className="text-gray-800" />
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-xl w-full mx-4 md:mx-0 overflow-hidden relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl"
              >
                ×
              </button>

              {/* Project Image */}
              <img
                src={activeProject.thumb || activeProject.img}
                alt={activeProject.title}
                className="w-full h-64 object-cover"
              />

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{activeProject.title}</h3>
                <p className="text-gray-700 mb-4">{activeProject.description}</p>
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400 to-purple-500 text-white font-semibold rounded-lg hover:brightness-110 transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
    