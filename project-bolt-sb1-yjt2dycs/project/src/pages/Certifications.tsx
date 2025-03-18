import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certifications = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-16"
    >
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-900 rounded-lg flex items-start space-x-4">
            <Award className="text-purple-400 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-purple-400">AWS Certified Developer</h3>
              <p className="text-gray-400 mb-2">Amazon Web Services • 2023</p>
              <p className="text-gray-300">
                Advanced cloud development and deployment certification for AWS platform.
              </p>
            </div>
          </div>
          
          <div className="p-6 bg-gray-900 rounded-lg flex items-start space-x-4">
            <Award className="text-purple-400 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-purple-400">React Developer Certification</h3>
              <p className="text-gray-400 mb-2">Meta • 2023</p>
              <p className="text-gray-300">
                Professional certification in React development and best practices.
              </p>
            </div>
          </div>
          
          <div className="p-6 bg-gray-900 rounded-lg flex items-start space-x-4">
            <Award className="text-purple-400 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-purple-400">Full Stack Development</h3>
              <p className="text-gray-400 mb-2">freeCodeCamp • 2022</p>
              <p className="text-gray-300">
                Comprehensive certification covering both frontend and backend development.
              </p>
            </div>
          </div>
          
          <div className="p-6 bg-gray-900 rounded-lg flex items-start space-x-4">
            <Award className="text-purple-400 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-purple-400">UI/UX Design Fundamentals</h3>
              <p className="text-gray-400 mb-2">Google • 2022</p>
              <p className="text-gray-300">
                Professional certification in user interface and experience design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;