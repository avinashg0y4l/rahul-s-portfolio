"use client";

import { motion } from "framer-motion";
import { Palette, PenTool, Camera, Layers } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Palette className="w-12 h-12 text-purple-500" />,
      title: "Logo & Branding",
      desc: "Crafting unique logos and brand identities that represent your business.",
    },
    {
      icon: <PenTool className="w-12 h-12 text-purple-500" />,
      title: "Illustrations",
      desc: "Custom illustrations tailored to your brand’s story and audience.",
    },
    {
      icon: <Camera className="w-12 h-12 text-purple-500" />,
      title: "Photo Editing",
      desc: "Professional photo retouching and enhancements for a polished look.",
    },
    {
      icon: <Layers className="w-12 h-12 text-purple-500" />,
      title: "Social Media Design",
      desc: "Creative posts, banners, and ads designed to grab attention online.",
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full bg-gradient-to-br from-yellow-50 to-purple-50 py-20 overflow-hidden"
    >
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-10 -left-10 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 -right-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-4">
          My <span className="bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          As a creative designer, I offer a wide range of services to help brands stand out visually and communicate effectively.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 text-center"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
