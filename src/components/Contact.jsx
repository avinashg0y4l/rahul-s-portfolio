"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import profile from "../assets/profile.jpg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2"
      >
        {/* Left: Contact Form */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-extrabold mb-6 text-gray-900">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Have any questions or feedback? Drop a message below 👇  
            We’ll respond within 24 hours.
          </p>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First name"
                className="p-3 border rounded-xl flex-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                className="p-3 border rounded-xl flex-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
            </div>
            <input
              type="email"
              placeholder="yourname@company.com"
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
            <input
              type="tel"
              placeholder="+1 (555) 444-0000"
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
            <textarea
              placeholder="Type your message..."
              rows="4"
              className="p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-blue-500 transition"
            >
              Send Message 🚀
            </motion.button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-100 to-purple-100 p-10 flex flex-col justify-center items-center relative"
        >
          {/* Profile Image with Glow */}
          <div className="relative mb-8">
            <div className="absolute inset-0 rounded-full bg-blue-400 blur-3xl opacity-40 animate-pulse"></div>
            <img
              src={profile}
              alt="Contact Person"
              className="relative w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>

          {/* Info Cards */}
          <div className="space-y-4 w-full">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 bg-gray-900 text-white p-4 rounded-xl shadow-md"
            >
              <Mail className="w-6 h-6 text-blue-400" />
              <span>Email: techsupport@yourmail.com</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 bg-gray-900 text-white p-4 rounded-xl shadow-md"
            >
              <Phone className="w-6 h-6 text-green-400" />
              <span>Phone: (+005) 432 986 450</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 bg-gray-900 text-white p-4 rounded-xl shadow-md"
            >
              <MapPin className="w-6 h-6 text-red-400" />
              <span>230 Norman Street, New York, H8R 1A1</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
