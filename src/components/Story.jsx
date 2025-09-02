"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Replace with your own images
import gallery1 from "../assets/gallery/main1.jpg";
import gallery2 from "../assets/gallery/main2.jpg";
import gallery3 from "../assets/gallery/main3.jpg";


const images = [
  {
    src: gallery1,
    title: "First Achievement",
    date: "2025",
    note: "Designed my first award-winning UI/UX project.",
  },
  {
    src: gallery2,
    title: "Creative Journey",
    date: "2024",
    note: "Explored motion graphics & interactive design.",
  },
  {
    src: gallery3,
    title: "Celebration Moments",
    date: "2025",
    note: "Captured milestones & celebrations with peers.",
  },
];

export default function StoryGallery() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section
      id="story-gallery"
      className="relative w-full py-20 bg-gradient-to-br from-purple-50 via-yellow-50 to-pink-50 overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-10 -left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 -right-10 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-center mb-14 text-gray-900"
        >
          My{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">
            Story & Gallery
          </span>
        </motion.h2>

        {/* Flipbook Container */}
        <div className="relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ rotateY: 90, opacity: 0, scale: 0.85 }}
              animate={{ rotateY: 0, opacity: 1, scale: 1 }}
              exit={{ rotateY: -90, opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="relative w-[90%] md:w-[70%] h-[420px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
            >
              {/* Image */}
              <img
                src={images[index].src}
                alt="gallery"
                className="w-full h-full object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-6">
                <h3 className="text-xl font-bold">{images[index].title}</h3>
                <p className="text-sm opacity-80">{images[index].date}</p>
                <p className="text-sm mt-2">{images[index].note}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-4 md:left-10 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          >
            <ChevronLeft className="text-gray-800" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 md:right-10 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          >
            <ChevronRight className="text-gray-800" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-yellow-500 scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
