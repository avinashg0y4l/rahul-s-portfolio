import About from './components/About.jsx';
import Hero from './components/Hero.jsx';
import Story from './components/Story.jsx';
import Contact from './components/Contact.jsx';
import Services from './components/Services.jsx';
import ProjectSection from './components/ProjectSection.jsx';

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
