
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import airbnb from "../Assests/airbnb.png"
import ipl from '../Assests/ipl.jpg'

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Airstay – Airbnb Clone ",
    description: "Airstay is a full-stack rental booking platform built with Node.js, Express, MongoDB, EJS, and Bootstrap. It features user authentication with Passport.js and a complete booking system with date validation, overlap prevention, and cancellation support. Payments are integrated via Razorpay, and images are uploaded securely using Multer and Cloudinary. Mapbox displays listing locations, and owner dashboards allow hosts to manage listings and view booking details. The platform includes a responsive UI, search, category filters, and is deployed on Render with MongoDB Atlas, with source code maintained on GitHub.",
    technologies: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap","Passport.js", "Razorpay", "Cloudinary", "Mapbox"],
    githubUrl: "https://github.com/pragya2203/airstay",
    imageUrl: airbnb
  },
  {
    id: 2,
    title: "IPL Match Win Predictor",
    description: "Engineered a machine learning model to predict IPL match outcomes with around 81% accuracy using Logistic Regression. Preprocessed and analyzed match data using Pandas, trained the model with Scikit-learn, and visualized insights using Matplotlib and Seaborn.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Logistic Regression"],
    githubUrl: "https://github.com",
    imageUrl: ipl
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <div className="bg-white py-20" ref={ref}>
      <motion.div 
        className="section-container"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">My Projects</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've built, showcasing my skills in web development and machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              isVisible={isInView} 
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
}

const ProjectCard = ({ project, index, isVisible }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
    >
      <div className="overflow-hidden bg-white flex justify-center items-center" style={{ maxHeight: '300px' }}>
        {project.imageUrl ? (
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-auto object-contain p-4 transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
            <span className="text-2xl font-semibold text-indigo-400">
              {project.title[0]}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-portfolio-blue mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 bg-blue-50 text-portfolio-blue text-xs font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-portfolio-blue hover:text-portfolio-accent transition-colors"
          >
            <Github size={18} className="mr-1" />
            GitHub
          </a>
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-portfolio-blue hover:text-portfolio-accent transition-colors"
            >
              <ExternalLink size={18} className="mr-1" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};


export default Projects;