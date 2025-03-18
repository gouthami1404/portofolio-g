import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-16"
    >
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="max-w-3xl">
          <p className="text-gray-300 mb-6">
            I am a passionate Web Developer with expertise in modern web technologies. 
            With a keen eye for design and a problem-solving mindset, I create innovative 
            solutions that enhance user experience and functionality.
          </p>
          <p className="text-gray-300">
            My goal is to bridge the gap between aesthetics and technology to build 
            impactful digital experiences that make a difference.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;