import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-16"
    >
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-400">Senior Web Developer</h3>
            <p className="text-gray-400 mb-2">Company Name • 2020 - Present</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Led development of multiple high-traffic web applications</li>
              <li>Implemented modern frontend architectures using React and Vue.js</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-400">Full Stack Developer</h3>
            <p className="text-gray-400 mb-2">Previous Company • 2018 - 2020</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Developed and maintained multiple client websites</li>
              <li>Created RESTful APIs using Node.js and Express</li>
              <li>Optimized database queries and improved application performance</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;