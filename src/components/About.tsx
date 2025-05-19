import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
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
          <h2 className="section-title">About Me</h2>
          <div className="w-20 h-1 bg-portfolio-accent mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
              I'm Pragya Singh, a passionate full-stack web developer who loves turning ideas into interactive, user-friendly digital experiences. I specialize in building scalable web applications using React.js for the frontend and Node.js/Express for the backend. I also work with RESTful APIs, databases like PostgreSQL and MongoDB, and enjoy crafting clean, maintainable code.
              </p>
              <p className="text-lg text-gray-700 mb-4">
              I'm constantly learning and exploring new technologies to stay ahead in the fast-evolving world of web development. Whether it's building intuitive user interfaces or optimizing backend performance, I thrive on solving problems and bringing value through technology.
              </p>
              <p className="text-lg text-gray-700">
                I enjoy tackling complex challenges and continuously expanding my knowledge in the ever-evolving tech landscape. My goal is to create impactful digital solutions that enhance user experiences and provide value.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-portfolio-blue mr-4">
                  <span className="font-bold">01</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Web Development</h3>
                  <p className="text-gray-600">Frontend & Backend</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-portfolio-accent mr-4">
                  <span className="font-bold">02</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Machine Learning</h3>
                  <p className="text-gray-600">Model Development</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl mb-4 text-portfolio-blue">Personal Info</h3>
              
              <div className="space-y-3">
                <div className="flex">
                  <span className="font-medium w-24 text-gray-700">Name:</span>
                  <span className="text-gray-600">Pragya Singh</span>
                </div>
                
                <div className="flex">
                  <span className="font-medium w-24 text-gray-700">Location:</span>
                  <span className="text-gray-600">Prayagraj, India</span>
                </div>
                
                <div className="flex">
                  <span className="font-medium w-24 text-gray-700">Email:</span>
                  <span className="text-gray-600">pragyasingh2203@gmail.com</span>
                </div>
                
                <div className="flex">
                  <span className="font-medium w-24 text-gray-700">Phone:</span>
                  <span className="text-gray-600">+91 8528321382</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
