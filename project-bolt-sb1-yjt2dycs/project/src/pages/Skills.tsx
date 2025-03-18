import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-16"
    >
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Frontend</h3>
            <ul className="space-y-2 text-gray-300">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Vue.js</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Backend</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Node.js</li>
              <li>Express</li>
              <li>Python</li>
              <li>Django</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Database</h3>
            <ul className="space-y-2 text-gray-300">
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Tools</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Git</li>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;