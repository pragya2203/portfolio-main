
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  organization: string;
  certificateUrl?: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Certificate of Participation in Coding Round of HackOn With Amazon - Season 4",
    organization: "Amazon",
    certificateUrl: "https://drive.google.com/file/d/16U5ih6CokOBrcpxpVevTBTeU-FZRR44y/view"
  },
  {
    id: 2,
    title: "Certificate of Participation in Flipkart GRiD 6.0 - Software Development Track",
    organization: "Flipkart",
    certificateUrl: "https://drive.google.com/file/d/10IYGhyXHYHS6khQjgU4JOR69X5xuVPCg/view"
  },
  {
    id: 3,
    title: "Certificate of Participation in Round 1 Online Assessment of the HP Power Lab",
    organization: "Hindustan Petroleum Corporation Ltd",
    certificateUrl: "https://drive.google.com/file/d/1ijwVqaMZI51B4_dBDeEXOqE78SToNDCN/view"
  }
];

const certifications = [
  {
    id: 1,
    title: "NPTEL Design and Analysis of Algorithms",
    organization: "NPTEL",
    certificateUrl: "https://drive.google.com/file/d/1ZBXPaKbvPJIip33L-MYOBOGcAHH4bNpi/view?usp=sharing"
  },
  {
    id: 2,
    title: "Node.js, Express, MongoDB and more: The Complete Bootcamp",
    organization: "Udemy",
    certificateUrl: "https://drive.google.com/file/d/1_o3wWX69vM5uaJo8DP5jupeaehBJWdln/view"
  },
  {
    id: 3,
    title: "Web Development Complete Bootcamp",
    organization: "Udemy",
    certificateUrl: "https://drive.google.com/file/d/1iYU4C7AC095AdotGeR2nYExIIYKBfYNh/view"
  },
  {
    id: 4,
    title: "Generative AI",
    organization: "Cousera",
    certificateUrl: "https://drive.google.com/file/d/1xvh2BoRO8_qQmbED8BtUiUdORsL1KNUt/view"
  }
];

const Achievements = () => {
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
          <h2 className="section-title">Achievements & Certifications</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognition of my technical journey through competitions, certifications, and educational achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gray-50 rounded-lg p-6 h-full">
              <h3 className="text-2xl font-semibold text-portfolio-blue mb-6 flex items-center">
                <Award className="mr-2 text-portfolio-accent" />
                Achievements
              </h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="bg-white p-4 rounded-md shadow-sm"
                  >
                    <h4 className="font-medium text-gray-800 mb-2">{achievement.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{achievement.organization}</p>
                    
                    {achievement.certificateUrl && (
                      <a
                        href={achievement.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium text-portfolio-blue hover:text-portfolio-accent transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        View Certificate
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-gray-50 rounded-lg p-6 h-full">
              <h3 className="text-2xl font-semibold text-portfolio-blue mb-6 flex items-center">
                <Award className="mr-2 text-portfolio-accent" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((certification, index) => (
                  <motion.div
                    key={certification.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="bg-white p-4 rounded-md shadow-sm"
                  >
                    <h4 className="font-medium text-gray-800 mb-2">{certification.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{certification.organization}</p>
                    
                    {certification.certificateUrl && (
                      <a
                        href={certification.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium text-portfolio-blue hover:text-portfolio-accent transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        View Certificate
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Achievements;
