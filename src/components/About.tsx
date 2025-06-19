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
              I'm Pragya Singh, a Computer Science undergraduate with a deep interest in backend development and full-stack web technologies. I enjoy designing and building scalable, high-performance applications that solve real-world problems. My primary expertise lies in developing robust backend systems using Node.js, Express, and MongoDB, with experience in implementing secure authentication, payment integration, RESTful APIs, and cloud services.
              </p>
              <p className="text-lg text-gray-700 mb-4">
              On the frontend, I work with React.js and Bootstrap to build responsive and user-friendly interfaces that complement the functionality of the backend. I'm also familiar with tools like Razorpay, Cloudinary, and Mapbox, which I’ve used in production-grade projects.
              </p>
              <p className="text-lg text-gray-700">
              Beyond technical skills, I focus on writing clean, maintainable code and following best practices in version control, testing, and deployment. I’m passionate about continuous learning and eager to contribute to impactful projects, whether in a collaborative team environment or through independent work.
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
