// Home.jsx - Main portfolio page with all sections
// This is the landing page that shows overview of everything

import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Achievements />
      <Gallery />
      <Contact />
    </>
  );
};

export default Home;
