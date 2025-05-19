
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Calendar, MapPin, Book } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educationData = [
    {
      id: 1,
      institution: "Manipal University Jaipur",
      degree: "B. Tech in Information Technology",
      location: "Jaipur, Rajasthan",
      period: "2022 - 2026",
      coursework: [
        "Data Structures and Algorithms",
        "Relational Database Management System",
        "Operating Systems",
        "Software Engineering",
        "Computer Networks",
        "Artificial Intelligence and Machine Learning",
        "Object Oriented Programming"
      ]
    },
    {
      id: 2,
      institution: "St. Mary's Convent Inter College",
      degree: "ISC (12th Grade)",
      location: "Prayagraj, Uttar Pradesh",
      period: "2020 - 2021",
      grade: "88.75%"
    },
    {
      id: 3,
      institution: "St. Mary's Convent Inter College",
      degree: "ICSE (10th Grade)",
      location: "Prayagraj, Uttar Pradesh",
      period: "2018 - 2019",
      grade: "82%"
    }
  ];

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
          <h2 className="section-title">Education</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey has provided me with a strong foundation in information technology and computer science.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          {/* Education items */}
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <EducationItem 
                key={item.id} 
                item={item} 
                index={index} 
                isVisible={isInView} 
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface EducationItemProps {
  item: {
    id: number;
    institution: string;
    degree: string;
    location: string;
    period: string;
    coursework?: string[];
    grade?: string;
  };
  index: number;
  isVisible: boolean;
}

const EducationItem = ({ item, index, isVisible }: EducationItemProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative">
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
        className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 -translate-y-1/3 w-8 h-8 rounded-full bg-portfolio-blue flex items-center justify-center shadow-md z-10"
      >
        <Book className="w-4 h-4 text-white" />
      </motion.div>
      
      {/* Content */}
      <motion.div
        initial={{ 
          opacity: 0, 
          x: isEven ? -30 : 30,
          y: 0 
        }}
        animate={isVisible 
          ? { opacity: 1, x: 0, y: 0 } 
          : { opacity: 0, x: isEven ? -30 : 30, y: 0 }
        }
        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
        className={`relative ml-16 sm:ml-0 sm:w-5/12 ${
          isEven ? 'sm:mr-auto' : 'sm:ml-auto'
        }`}
      >
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-portfolio-blue mb-2">
            {item.degree}
          </h3>
          <h4 className="text-lg font-medium mb-4">{item.institution}</h4>
          
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{item.location}</span>
          </div>
          
          <div className="flex items-center text-gray-600 mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{item.period}</span>
          </div>
          
          {item.grade && (
            <div className="mb-4">
              <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-md">
                Grade: {item.grade}
              </div>
            </div>
          )}
          
          {item.coursework && (
            <div>
              <h5 className="font-medium text-gray-700 mb-2">Relevant Coursework:</h5>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {item.coursework.map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
