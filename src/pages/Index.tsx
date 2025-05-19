
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  
  useEffect(() => {
    const unsubscribe = scrollProgress.onChange(setScrollPercentage);
    return () => unsubscribe();
  }, [scrollProgress]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-portfolio-blue to-portfolio-accent"
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>
      
      <Header activeSection={activeSection} />
      
      <main>
        <section id="hero" onFocus={() => setActiveSection("hero")}>
          <Hero />
        </section>
        
        <section id="about" onFocus={() => setActiveSection("about")}>
          <About />
        </section>
        
        <section id="skills" onFocus={() => setActiveSection("skills")}>
          <Skills />
        </section>
        
        <section id="projects" onFocus={() => setActiveSection("projects")}>
          <Projects />
        </section>
        
        <section id="education" onFocus={() => setActiveSection("education")}>
          <Education />
        </section>
        
        <section id="achievements" onFocus={() => setActiveSection("achievements")}>
          <Achievements />
        </section>
        
        <section id="contact" onFocus={() => setActiveSection("contact")}>
          <Contact />
        </section>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
