import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-16"
    >
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
              alt="Project 1" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">E-Commerce Platform</h3>
              <p className="text-gray-300 mb-4">
                A full-featured e-commerce platform built with React, Node.js, and MongoDB.
                Includes user authentication, product management, and payment integration.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-purple-400 hover:text-purple-300">View Demo</a>
                <a href="#" className="text-purple-400 hover:text-purple-300">Source Code</a>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" 
              alt="Project 2" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Task Management App</h3>
              <p className="text-gray-300 mb-4">
                A collaborative task management application with real-time updates,
                built using Vue.js and Firebase.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-purple-400 hover:text-purple-300">View Demo</a>
                <a href="#" className="text-purple-400 hover:text-purple-300">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;