import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './index.css';

import PortfolioCard from "./components/PortfolioCard.jsx";
import About from './components/About.jsx';
import Hero from './components/Hero.jsx';
import Contact from './components/Contact.jsx';
import Navbar from './components/Navbar.jsx';

export default function App() {
  const projects = [
    { title: "Design 1", img: "https://via.placeholder.com/300" },
    { title: "Design 2", img: "https://via.placeholder.com/300" },
    { title: "Design 3", img: "https://via.placeholder.com/300" },
  ];

  return (
    <> {/* React Fragment (acts like a parent wrapper) */}
      <Navbar />
      <Hero />
      <About />
      <section
        id="projects"
        className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {projects.map((proj, i) => (
          <PortfolioCard key={i} title={proj.title} img={proj.img} />
        ))}
      </section>
      <Contact />
    </>
  );
}
