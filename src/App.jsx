import { motion } from "framer-motion";
import PortfolioCard from "./components/PortfolioCard.jsx";
import About from './components/About.jsx';
import Hero from './components/Hero.jsx';
import Story from './components/Story.jsx';
import Contact from './components/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpeg";
import project3 from "./assets/project3.jpg";
import { i, link } from "framer-motion/client";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import Test from "./components/test.jsx";

export default function App() {
 
  return (
    <>
      
      <Hero />

      {/* Wrap remaining sections in gradient */}
      <div className="bg-gradient-to-br from-purple-50 to-yellow-50">
        <About />
        <Services />

        <ProjectSection />

        <Story />

        <Contact />
      </div>
    </>
  );
}
