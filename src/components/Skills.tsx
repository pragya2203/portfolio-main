
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

type SkillCategory = {
  name: string;
  skills: string[];
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<string>("languages");
  
  const skillCategories: Record<string, SkillCategory> = {
    languages: {
      name: "Programming & Markup Languages",
      skills: [
        "C++", 
        "C", 
        "Python", 
        "JavaScript (ES6+)", 
        "HTML5", 
        "CSS3", 
        "PHP", 
        "Java"
      ]
    },
    frameworks: {
      name: "Frameworks & Libraries",
      skills: [
        "Node.js", 
        "Express.js", 
        "React.js", 
        "Tailwind CSS", 
        "Scikit-Learn", 
        "jQuery", 
        "Angular", 
        "REST API"
      ]
    },
    databases: {
      name: "Databases & Tools",
      skills: [
        "MongoDB", 
        "SQL", 
        "MySQL", 
        "Git", 
        "GitHub"
      ]
    }
  };

  return (
    <div className="bg-gray-50 py-20" ref={ref}>
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
          <h2 className="section-title">My Skills</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've developed a wide range of technical skills throughout my journey, with a focus on web development, machine learning technologies and problem solving skills.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-md font-medium transition-all ${
                  activeTab === category
                    ? "bg-portfolio-blue text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {skillCategories[category].name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <AnimatedTabContent 
            category={skillCategories[activeTab]} 
            isVisible={isInView}
          />
        </div>
      </motion.div>
    </div>
  );
};

interface AnimatedTabContentProps {
  category: SkillCategory;
  isVisible: boolean;
}

const AnimatedTabContent = ({ category, isVisible }: AnimatedTabContentProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      key={category.name}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
    >
      {category.skills.map((skill) => (
        <motion.div 
          key={skill} 
          variants={itemVariants} 
          className="bg-gray-50 rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow"
        >
          <span className="font-medium text-gray-700">{skill}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Skills;
