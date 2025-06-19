import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

  const sectionIds = [
    "hero",
    "about",
    "skills",
    "projects",
    "education",
    "achievements",
    "contact"
  ];

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const { scrollYProgress } = useScroll();
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollProgress.onChange(setScrollPercentage);
    return () => unsubscribe();
  }, [scrollProgress]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { threshold: 0.6 }
    );

    sectionIds.forEach((id) => {
      const element = sectionRefs.current[id];
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = sectionRefs.current[id];
        if (element) observer.unobserve(element);
      });
    };
  }, []);

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
        {sectionIds.map((id) => (
          <section
            key={id}
            id={id}
            ref={(el) => (sectionRefs.current[id] = el)}
          >
            {{
              hero: <Hero />,
              about: <About />,
              skills: <Skills />,
              projects: <Projects />,
              education: <Education />,
              achievements: <Achievements />,
              contact: <Contact />
            }[id]}
          </section>
        ))}
      </main>

      <Footer />
    </motion.div>
  );
};

export default Index;
