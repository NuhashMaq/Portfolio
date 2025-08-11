import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:mashfiq.cse.ruet@gmail.com', label: 'Email' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-600/10 animate-pulse" />
      </div>

      <Parallax speed={-10}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 text-center relative z-10"
        >
          {/* Profile Image with Glow Effect */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 3 }}
            className="mb-8 inline-block"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1 shadow-2xl shadow-blue-500/25">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl md:text-5xl font-bold text-blue-400">
                MN
              </div>
            </div>
          </motion.div>

          {/* Name with Gradient Text */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
              Mashfiq Naushad
            </span>
          </motion.h1>

          {/* Subtitle with Typewriter Effect */}
          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 font-light"
          >
            <span className="text-blue-400">BSc in Computer Science & Engineering</span>
            <br />
            <span className="text-indigo-400">AI/ML Engineer & Full Stack Developer</span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating intelligent solutions through Machine Learning, Deep Learning, 
            and modern web technologies. Currently pursuing my degree at RUET while building 
            innovative projects in AI and data science.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(30, 144, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full font-semibold text-white flex items-center justify-center gap-2 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              <Download size={20} />
              Download CV
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                borderColor: '#1E90FF',
                color: '#1E90FF'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-gray-300 hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ 
                  scale: 1.2,
                  color: '#1E90FF',
                  y: -5
                }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-blue-500 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </Parallax>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;