"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import profile from "../assets/profile.jpg";

export default function Contact() {
  return (
    <section id="contact" className="py-12 flex justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden flex">
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-700">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Let's Chat, Contact with Us<br />Have any questions or feedback? We're here to help. Send us a message, we'll get back to you within 24 hours.
          </p>
          <form className="flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First name"
                className="p-3 border rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                className="p-3 border rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <input
              type="email"
              placeholder="yourname@company.com"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="tel"
              placeholder="+1 (555) 444-0000"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              placeholder="Type your message"
              rows="4"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="w-1/2 bg-gradient-to-br from-blue-100 to-blue-200 p-8 flex flex-col justify-center items-center">
          <img
            src={profile}
            alt="Contact Person"
            className="rounded-lg mb-6"
          />
          <div className="space-y-4 w-full">
            <div className="flex items-center gap-4 bg-gray-800 text-white p-4 rounded-lg">
              <Mail className="w-5 h-5" />
              <span>Email: techsupport@yourmail.com</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-800 text-white p-4 rounded-lg">
              <Phone className="w-5 h-5" />
              <span>Phone: (+005) 432 986 450</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-800 text-white p-4 rounded-lg">
              <MapPin className="w-5 h-5" />
              <span>Address: 230 Norman Street New York, H8R 1A1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}