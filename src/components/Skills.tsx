import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95, icon: '🐍' },
        { name: 'C++', level: 85, icon: '⚡' },
        { name: 'JavaScript', level: 80, icon: '🟨' },
        { name: 'Java', level: 75, icon: '☕' },
        { name: 'C', level: 80, icon: '🔧' }
      ]
    },
    {
      title: 'Machine Learning & AI',
      skills: [
        { name: 'TensorFlow', level: 90, icon: '🧠' },
        { name: 'PyTorch', level: 85, icon: '🔥' },
        { name: 'Scikit-learn', level: 90, icon: '📊' },
        { name: 'Pandas', level: 95, icon: '🐼' },
        { name: 'NumPy', level: 90, icon: '🔢' }
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React.js', level: 85, icon: '⚛️' },
        { name: 'Django', level: 80, icon: '🎸' },
        { name: 'Node.js', level: 75, icon: '🟢' },
        { name: 'HTML/CSS', level: 90, icon: '🎨' },
        { name: 'Tailwind CSS', level: 85, icon: '💨' }
      ]
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

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.5 }
    })
  };

  return (
    <section id="skills" className="py-20 relative">
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
                Skills & Expertise
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              Constantly learning and mastering new technologies to build innovative solutions
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <span className="text-blue-400 text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          variants={skillBarVariants}
                          custom={skill.level}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Circular Progress Skills */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30"
          >
            <h3 className="text-2xl font-bold text-center text-indigo-400 mb-8">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'Data Science', level: 92 },
                { name: 'Machine Learning', level: 88 },
                { name: 'Web Development', level: 82 },
                { name: 'Problem Solving', level: 95 }
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
                  className="flex flex-col items-center space-y-3"
                >
                  <div className="relative w-20 h-20">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#374151"
                        strokeWidth="2"
                      />
                      <motion.path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeDasharray={`${skill.level}, 100`}
                        initial={{ strokeDasharray: "0, 100" }}
                        animate={inView ? { strokeDasharray: `${skill.level}, 100` } : { strokeDasharray: "0, 100" }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 1.5 }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#6366F1" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-blue-400 font-bold text-sm">{skill.level}%</span>
                    </div>
                  </div>
                  <span className="text-white font-medium text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;