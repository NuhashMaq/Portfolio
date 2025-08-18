import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle, Star, Trophy } from 'lucide-react';

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const certifications = [
    {
      title: "AI Prompt Engineer",
      issuer: "AICerts",
      icon: "🤖",
      color: "from-purple-500 to-pink-500",
      year: "2024",
      description: "Advanced prompt engineering techniques for AI systems"
    },
    {
      title: "Machine Learning Specialist",
      issuer: "Kaggle",
      icon: "🧠",
      color: "from-blue-500 to-cyan-500",
      year: "2024",
      description: "Comprehensive ML algorithms and model deployment"
    },
    {
      title: "Git & GitHub Mastery",
      issuer: "Version Control Institute",
      icon: "📚",
      color: "from-green-500 to-emerald-500",
      year: "2023",
      description: "Advanced version control and collaboration workflows"
    },
    {
      title: "Data Science Professional",
      issuer: "Kaggle",
      icon: "📊",
      color: "from-orange-500 to-red-500",
      year: "2024",
      description: "Statistical analysis and data visualization expertise"
    },
    {
      title: "Microsoft Copilot Expert",
      issuer: "Microsoft",
      icon: "🚀",
      color: "from-indigo-500 to-purple-500",
      year: "2024",
      description: "AI-powered development tools and productivity"
    },
    {
      title: "Netcom Professional",
      issuer: "Netcom Technologies",
      icon: "🌐",
      color: "from-teal-500 to-green-500",
      year: "2023",
      description: "Network technologies and system administration"
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

  const cardVariants = {
    hidden: { rotateY: 0 },
    hover: { rotateY: 180 }
  };

  return (
    <section id="certifications" className="py-20 relative">
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
                Certifications
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              Professional certifications validating expertise across various domains
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                variants={itemVariants}
                whileHover="hover"
                className="group perspective-1000 h-64"
              >
                <motion.div
                  variants={cardVariants}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative w-full h-full transform-style-preserve-3d"
                >
                  {/* Front of Card */}
                  <div className="absolute inset-0 backface-hidden">
                    <div className={`h-full bg-gradient-to-br ${cert.color} rounded-2xl p-6 flex flex-col justify-between shadow-2xl`}>
                      <div className="flex items-start justify-between">
                        <div className="text-4xl">{cert.icon}</div>
                        <div className="text-white/80">
                          <CheckCircle size={24} />
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {cert.title}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {cert.issuer}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 text-sm font-medium">
                          {cert.year}
                        </span>
                        <Trophy className="text-white/80" size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="h-full bg-gray-800/90 backdrop-blur-lg rounded-2xl p-6 flex flex-col justify-center border border-gray-700/50 shadow-2xl">
                      <div className="text-center space-y-4">
                        <Award className="text-blue-400 mx-auto" size={48} />
                        <h4 className="text-lg font-bold text-white">
                          {cert.title}
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {cert.description}
                        </p>
                        <div className="flex items-center justify-center space-x-1 text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" />
                          ))}
                        </div>
                        <div className="text-blue-400 font-medium text-sm">
                          Certified {cert.year}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/30"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "6+", label: "Certifications" },
                { value: "3", label: "AI/ML Certs" },
                { value: "2024", label: "Latest Cert" },
                { value: "100%", label: "Pass Rate" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                  className="space-y-2"
                >
                  <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
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

export default Certifications;