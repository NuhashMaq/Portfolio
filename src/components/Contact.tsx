import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Message sent successfully!');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mashfiq.cse.ruet@gmail.com',
      href: 'mailto:mashfiq.cse.ruet@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 1780875544',
      href: 'tel:+8801780875544'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangladesh',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-gray-400' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-500' },
    { icon: Mail, label: 'Email', href: 'mailto:mashfiq.cse.ruet@gmail.com', color: 'hover:text-red-500' },
    { icon: Calendar, label: 'Schedule', href: '#', color: 'hover:text-green-500' }
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
    <section id="contact" className="py-20 relative">
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
                Let's Connect
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full" />
            <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              Ready to collaborate on exciting projects or discuss opportunities in AI/ML and web development
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-blue-400 mb-6">
                  Get In Touch
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always excited to discuss new opportunities, collaborative projects, 
                  or just chat about the latest in AI and technology. Don't hesitate to reach out!
                </p>
                
                {/* Contact Details */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-center space-x-4 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                    >
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                        <info.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/30">
                <h4 className="text-lg font-bold text-white mb-4">Follow Me</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center justify-center space-x-2 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300 text-gray-400 ${social.color}`}
                    >
                      <social.icon size={18} />
                      <span className="text-sm font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-indigo-400 mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        whileFocus={{ y: -2 }}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:bg-gray-700/70 transition-all duration-300 peer"
                        placeholder=" "
                      />
                      <label className="absolute left-4 top-3 text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-400 peer-focus:text-sm peer-focus:bg-gray-800 peer-focus:px-2 peer-valid:-top-2 peer-valid:left-2 peer-valid:text-blue-400 peer-valid:text-sm peer-valid:bg-gray-800 peer-valid:px-2">
                        Your Name
                      </label>
                    </motion.div>
                    
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        whileFocus={{ y: -2 }}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:bg-gray-700/70 transition-all duration-300 peer"
                        placeholder=" "
                      />
                      <label className="absolute left-4 top-3 text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-400 peer-focus:text-sm peer-focus:bg-gray-800 peer-focus:px-2 peer-valid:-top-2 peer-valid:left-2 peer-valid:text-blue-400 peer-valid:text-sm peer-valid:bg-gray-800 peer-valid:px-2">
                        Your Email
                      </label>
                    </motion.div>
                  </div>

                  {/* Subject */}
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <motion.input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      whileFocus={{ y: -2 }}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:bg-gray-700/70 transition-all duration-300 peer"
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-3 text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-400 peer-focus:text-sm peer-focus:bg-gray-800 peer-focus:px-2 peer-valid:-top-2 peer-valid:left-2 peer-valid:text-blue-400 peer-valid:text-sm peer-valid:bg-gray-800 peer-valid:px-2">
                      Subject
                    </label>
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      whileFocus={{ y: -2 }}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:bg-gray-700/70 transition-all duration-300 resize-none peer"
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-3 text-gray-400 transition-all duration-300 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-blue-400 peer-focus:text-sm peer-focus:bg-gray-800 peer-focus:px-2 peer-valid:-top-2 peer-valid:left-2 peer-valid:text-blue-400 peer-valid:text-sm peer-valid:bg-gray-800 peer-valid:px-2">
                      Your Message
                    </label>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white font-semibold flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1 }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;