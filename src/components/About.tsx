import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Mail, Phone, User, Code, Brain, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '15+' },
    { icon: Brain, label: 'ML Models Deployed', value: '8+' },
    { icon: Trophy, label: 'Kaggle Competitions', value: '5+' },
    { icon: GraduationCap, label: 'Years of Study', value: '3' }
  ];

  const personalInfo = [
    { icon: User, label: 'Age', value: '23 years' },
    { icon: MapPin, label: 'Location', value: 'Bangladesh' },
    { icon: Mail, label: 'Email', value: 'mashfiq.cse.ruet@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+880 1780875544' }
  ];

  return (
    <section id="about" className="py-20 relative">
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
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">My Journey</h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I'm a passionate Computer Science student at Rajshahi University of Engineering 
                    and Technology (RUET), currently in my 3rd year. My journey in technology began 
                    with a fascination for problem-solving and has evolved into a deep passion for 
                    Artificial Intelligence and Machine Learning.
                  </p>
                  <p>
                    With expertise in Python, I've developed numerous ML/DL models and deployed 
                    AI solutions that solve real-world problems. My experience spans from data 
                    science and deep learning to full-stack web development, allowing me to create 
                    end-to-end intelligent applications.
                  </p>
                  <p>
                    When I'm not coding, you'll find me participating in Kaggle competitions, 
                    exploring the latest AI research, or contributing to open-source projects. 
                    I believe in continuous learning and sharing knowledge with the community.
                  </p>
                </div>
              </div>

              {/* Personal Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gray-800/30 backdrop-blur-lg rounded-lg p-4 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <info.icon className="text-blue-400" size={20} />
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-indigo-400 mb-6">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-center p-6 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <stat.icon className="text-blue-400 mx-auto mb-3" size={32} />
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education Highlight */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl p-8 border border-blue-500/30"
              >
                <div className="flex items-center space-x-4">
                  <GraduationCap className="text-blue-400" size={48} />
                  <div>
                    <h4 className="text-xl font-bold text-blue-400">Currently Studying</h4>
                    <p className="text-white font-medium">BSc in Computer Science & Engineering</p>
                    <p className="text-gray-300">Rajshahi University of Engineering & Technology</p>
                    <div className="flex items-center mt-2">
                      <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                        3rd Year
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;