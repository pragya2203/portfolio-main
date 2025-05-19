
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-white to-blue-50">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -right-10 -top-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-indigo-300 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="w-full max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg md:text-xl font-medium text-portfolio-blue">Hello, I'm</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
              Pragya Singh
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
              Information Technology Student
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-gray-600 mb-8 max-w-lg">
              I'm a full-stack web developer with strong proficiency in React.js for building responsive, dynamic user interfaces. I also work with Node.js and Express to develop robust RESTful APIs and scalable backend systems.
            </p>
          </motion.div>
          
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a 
              href="#contact" 
              className="px-6 py-3 bg-portfolio-blue text-white font-medium rounded-md hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border-2 border-portfolio-blue text-portfolio-blue font-medium rounded-md hover:bg-portfolio-blue/5 transition-colors"
            >
              View Projects
            </a>
          </motion.div>
          
          <motion.div
            className="flex items-center space-x-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a 
              href="https://github.com/pragya2203" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-portfolio-blue transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/pragya-singh2203/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-portfolio-blue transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:pragyasingh2203@gmail.com" 
              className="text-gray-600 hover:text-portfolio-blue transition-colors"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-600 hover:text-portfolio-blue transition-colors"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.2,
          y: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          } 
        }}
      >
        <span className="text-sm mb-1">Scroll Down</span>
        <ChevronDown size={20} />
      </motion.a>
    </div>
  );
};

export default Hero;
