import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code, Trophy, BookOpen } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      title: "Computer Science Student",
      organization: "Rajshahi University of Engineering & Technology",
      period: "2022 - Present",
      description: "Pursuing BSc in Computer Science and Engineering with focus on AI/ML, Data Science, and Software Development. Maintaining excellent academic performance while working on research projects.",
      icon: GraduationCap,
      type: "education",
      achievements: [
        "Dean's List for Academic Excellence",
        "Led multiple group projects in ML/AI",
        "Active in programming competitions"
      ]
    },
    {
      title: "Kaggle Competitor",
      organization: "Kaggle Platform",
      period: "2023 - Present",
      description: "Active participant in machine learning competitions, collaborating with global data science community and implementing cutting-edge ML algorithms.",
      icon: Trophy,
      type: "competition",
      achievements: [
        "Participated in 5+ competitions",
        "Achieved top 20% in multiple contests",
        "Built ensemble models for predictions"
      ]
    },
    {
      title: "Self-Directed Learning",
      organization: "Various Online Platforms",
      period: "2021 - Present",
      description: "Continuous learning through online courses, tutorials, and hands-on projects. Specializing in Python, ML/DL frameworks, and web development technologies.",
      icon: BookOpen,
      type: "learning",
      achievements: [
        "Completed 15+ online courses",
        "Built 20+ personal projects",
        "Mentored junior developers"
      ]
    },
    {
      title: "Freelance Developer",
      organization: "Independent Projects",
      period: "2023 - Present",
      description: "Working on various freelance projects involving web development, data analysis, and machine learning solutions for small businesses and startups.",
      icon: Code,
      type: "work",
      achievements: [
        "Delivered 10+ successful projects",
        "Client satisfaction rate: 100%",
        "Specialized in full-stack solutions"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const typeColors = {
    education: 'from-blue-500 to-cyan-500',
    competition: 'from-purple-500 to-pink-500',
    learning: 'from-green-500 to-emerald-500',
    work: 'from-orange-500 to-red-500'
  };

  return (
    <section id="experience" className="py-20 relative">
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
                Experience & Journey
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              A timeline of my academic journey, projects, and professional development
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 transform md:-translate-x-0.5" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 z-10">
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${typeColors[exp.type]} shadow-lg`}
                    />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ 
                        scale: 1.02, 
                        y: -5,
                        boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
                      }}
                      className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500"
                    >
                      {/* Header */}
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${typeColors[exp.type]} shadow-lg`}>
                          <exp.icon className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-blue-400 font-medium mb-1">
                            {exp.organization}
                          </p>
                          <span className="text-gray-400 text-sm">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <h4 className="text-blue-400 font-semibold text-sm uppercase tracking-wide">
                          Key Highlights
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ delay: index * 0.2 + achievementIndex * 0.1 }}
                              className="text-gray-400 text-sm flex items-center space-x-2"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30"
          >
            <h3 className="text-2xl font-bold text-center text-blue-400 mb-8">
              Journey Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "3+", label: "Years Learning" },
                { value: "15+", label: "Projects Built" },
                { value: "5+", label: "Competitions" },
                { value: "6+", label: "Certifications" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ delay: index * 0.1, duration: 0.8, type: "spring" }}
                  className="space-y-2"
                >
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;