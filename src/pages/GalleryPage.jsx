// src/components/Gallery.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

// Import images
import img1 from "../assets/gallery/main1.jpg";
import img2 from "../assets/gallery/main2.jpg";
import img3 from "../assets/gallery/main3.jpg";
import img4 from "../assets/gallery/1747156307026.jpg";
import img5 from "../assets/gallery/1747771036406.jpg";
import img6 from "../assets/gallery/1747771039557.jpg";

// Gallery data with SEO info
const galleryData = [
  {
    src: img1,
    title: "Portfolio Showcase",
    date: "2025-01-12",
    event: "Freelance Project",
    caption: "UI/UX design concept created for a modern mobile app interface.",
  },
  {
    src: img2,
    title: "Creative Poster",
    date: "2024-12-02",
    event: "College Design Fest",
    caption: "Poster design using Photoshop and Illustrator for an art event.",
  },
  {
    src: img3,
    title: "Brand Identity",
    date: "2024-11-18",
    event: "Startup Branding",
    caption: "Logo and identity pack designed for a new clothing brand.",
  },
  {
    src: img4,
    title: "Motion Graphic",
    date: "2024-10-05",
    event: "Client Work",
    caption: "Animation visuals blending abstract art with motion graphics.",
  },
  {
    src: img5,
    title: "Illustration Artwork",
    date: "2024-09-20",
    event: "Personal Project",
    caption: "Hand-drawn illustration digitized for a creative storytelling project.",
  },
  {
    src: img6,
    title: "Photography Edit",
    date: "2024-08-15",
    event: "Independence Day",
    caption: "Photography retouching and compositing using Lightroom & Photoshop.",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOpen = (index) => setSelectedIndex(index);
  const handleClose = () => setSelectedIndex(null);
  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
  };
  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-purple-50 to-yellow-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-12 text-center">
          My <span className="bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">Gallery</span>
        </h2>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 cursor-pointer"
              onClick={() => handleOpen(index)}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-1">{item.event} · {new Date(item.date).toDateString()}</p>
                <p className="text-gray-600 text-sm">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={handleClose}>
            <button className="absolute top-5 right-10 text-white text-3xl" onClick={handleClose}>&times;</button>
            <button className="absolute left-5 text-white text-4xl" onClick={showPrev}>❮</button>
            <img
              src={galleryData[selectedIndex].src}
              alt={galleryData[selectedIndex].caption}
              className="max-w-4xl max-h-[80vh] rounded-lg shadow-xl"
            />
            <button className="absolute right-5 text-white text-4xl" onClick={showNext}>❯</button>
            <div className="absolute bottom-10 text-center text-gray-200 px-6">
              <h3 className="text-xl font-bold">{galleryData[selectedIndex].title}</h3>
              <p className="text-sm">{galleryData[selectedIndex].event} · {new Date(galleryData[selectedIndex].date).toDateString()}</p>
              <p className="text-sm italic">{galleryData[selectedIndex].caption}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
