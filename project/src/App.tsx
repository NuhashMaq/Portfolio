import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <ParallaxProvider>
      <div className="bg-gray-950 text-white min-h-screen overflow-x-hidden">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 z-50 origin-left"
          style={{ scaleX }}
        />
        
        {/* Particle Background */}
        <ParticleBackground />
        
        {/* Circuit Board Background Pattern */}
        <div className="fixed inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10h80v80H10V10zm20 20h40v40H30V30z" stroke="#1E90FF" strokeWidth="0.5" fill="none"/>
                <circle cx="20" cy="20" r="2" fill="#4B6CB7"/>
                <circle cx="80" cy="20" r="2" fill="#4B6CB7"/>
                <circle cx="20" cy="80" r="2" fill="#4B6CB7"/>
                <circle cx="80" cy="80" r="2" fill="#4B6CB7"/>
                <path d="M20 20L80 20M20 80L80 80M20 20L20 80M80 20L80 80" stroke="#1E90FF" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>

        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;