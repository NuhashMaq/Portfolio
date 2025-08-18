import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Brain, Globe, Database, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "AI-Powered Recommendation System",
      description: "Machine learning model that provides personalized recommendations using collaborative filtering and deep learning techniques.",
      tech: ["Python", "TensorFlow", "Pandas", "Flask"],
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive web application for data visualization and business intelligence with real-time analytics capabilities.",
      tech: ["React", "Python", "Django", "PostgreSQL"],
      icon: Database,
      gradient: "from-blue-500 to-cyan-500",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Neural Network Image Classifier",
      description: "Deep learning model for image classification with transfer learning, achieving 94% accuracy on test dataset.",
      tech: ["PyTorch", "OpenCV", "NumPy", "Matplotlib"],
      icon: Brain,
      gradient: "from-green-500 to-emerald-500",
      image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack web application with modern UI/UX, payment integration, and admin dashboard for online retail.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: Globe,
      gradient: "from-orange-500 to-red-500",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Natural Language Processing Tool",
      description: "Text analysis application for sentiment analysis, entity recognition, and document classification using transformers.",
      tech: ["Python", "Transformers", "spaCy", "FastAPI"],
      icon: Code,
      gradient: "from-indigo-500 to-purple-500",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Real-time Chat Application",
      description: "Scalable messaging platform with WebSocket connections, file sharing, and modern responsive interface.",
      tech: ["React", "Socket.io", "Express", "Redis"],
      icon: Globe,
      gradient: "from-teal-500 to-green-500",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              Showcasing innovative solutions built with cutting-edge technologies
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 5
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className="group bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-75 group-hover:opacity-90 transition-opacity duration-300`} />
                  
                  {/* Project Icon */}
                  <div className="absolute top-4 right-4">
                    <project.icon className="text-white" size={32} />
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-lg rounded-full hover:bg-white/30 transition-all duration-300"
                    >
                      <Github className="text-white" size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-lg rounded-full hover:bg-white/30 transition-all duration-300"
                    >
                      <ExternalLink className="text-white" size={20} />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05, duration: 0.3 }}
                        className="px-3 py-1 text-xs bg-gray-700/50 text-blue-300 rounded-full border border-blue-500/20 hover:border-blue-500/50 transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 border border-blue-500/20"
            >
              View All Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;