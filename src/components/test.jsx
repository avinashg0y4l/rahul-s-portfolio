import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioCard from "./PortfolioCard";

export default function ProjectsSection({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  // Close modal on escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") setSelectedProject(null);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus trap inside modal
  useEffect(() => {
    if (!selectedProject) return;
    const focusableElements = modalRef.current.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select'
    );
    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    function trapFocus(e) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }

    window.addEventListener("keydown", trapFocus);
    firstEl.focus();
    return () => window.removeEventListener("keydown", trapFocus);
  }, [selectedProject]);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
  };

  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
      aria-label="Projects Showcase"
    >
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 -left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 -right-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Section Heading */}
      <h2 className="text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-12 text-center select-none">
        Projects{" "}
        <span className="bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent ml-2">
          Showcase
        </span>
      </h2>

      {/* Project Cards Grid */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <motion.div
            key={proj.id || proj.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * projects.indexOf(proj) }}
            onClick={() => setSelectedProject(proj)} // Only open modal, no navigation
            className="cursor-pointer rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-400 dark:focus:ring-purple-500 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
            tabIndex={0}
            role="button"
            aria-pressed={selectedProject === proj}
          >
            {/* Pass link as null to avoid any clickable link in the card */}
            <PortfolioCard title={proj.title} img={proj.img} link={null} />
          </motion.div>
        ))}
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            aria-modal="true"
            role="dialog"
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full p-6 relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
              tabIndex={-1}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-purple-500 rounded-full p-1"
                onClick={() => setSelectedProject(null)}
                aria-label="Close Project Details"
              >
                ✕
              </button>

              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="rounded-xl mb-4 max-h-72 w-full object-cover"
                loading="lazy"
              />
              <h3
                id="modal-title"
                className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100"
              >
                {selectedProject.title}
              </h3>
              <p
                id="modal-desc"
                className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
              >
                {selectedProject.description ||
                  "This project doesn’t have a description yet."}
              </p>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-purple-500 text-white rounded-lg shadow-md hover:opacity-90 transition"
              >
                Visit Project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
