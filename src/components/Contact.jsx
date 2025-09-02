"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import profile from "../assets/profile.jpg";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "62eb794f-0621-4cc1-9f55-0b012e6eb2c7"); // 🔑 Replace with your Web3Forms Access Key

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
  setResult(
    <p className="mt-4 px-4 py-3 rounded-lg bg-green-100 text-green-700 border border-green-300">
      ✅ Message sent successfully!
    </p>
  );
  event.target.reset();
} else {
  setResult(
    <p className="mt-4 px-4 py-3 rounded-lg bg-red-100 text-red-700 border border-red-300">
      ❌ Something went wrong. Please try again.
    </p>
  );
}

  };

  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-br from-yellow-50 to-purple-50 py-20 overflow-hidden"
    >
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-10 -right-10 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 -left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        {/* Left: Contact Form */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 bg-white shadow-xl rounded-2xl p-8"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Get in{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Have questions or ideas? Let’s connect! Drop a message and I’ll
            respond within 24 hours.
          </p>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="first_name"
                placeholder="First name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="yourname@company.com"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Type your message..."
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            ></textarea>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-300 transition"
            >
              Send Message
            </motion.button>
          </form>

          {/* Result Message */}
          {result && (
            <p className="mt-4 text-sm text-gray-700 font-medium">{result}</p>
          )}
        </motion.div>

        {/* Right: Profile + Contact Info */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col items-center text-center gap-6"
        >
          <div className="flex justify-center w-full">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-yellow-400 relative">
              <img
                src={profile}
                alt="Contact Person"
                className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-4 w-full md:w-auto">
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition">
              <Mail className="w-6 h-6 text-purple-500" />
              <span className="text-gray-700">techsupport@yourmail.com</span>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition">
              <Phone className="w-6 h-6 text-purple-500" />
              <span className="text-gray-700">(+91) 77 3929 5654</span>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition">
              <MapPin className="w-6 h-6 text-purple-500" />
              <span className="text-gray-700">Patna, Bihar, India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
