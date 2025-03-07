"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload } from 'react-icons/fi';
import portfolioData from '../data/portfolioData';

const Hero = () => {
  const { basic } = portfolioData;

  const socialIcons = {
    github: <FiGithub size={20} />,
    linkedin: <FiLinkedin size={20} />,
    twitter: <FiTwitter size={20} />,
  };

  return (
    <section id="home" className="pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-blue-600 dark:text-blue-400 font-bold mb-4">Hello, I'm</h2>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">{basic.name}</h1>
            <h3 className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-6">{basic.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              {basic.bio}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              {basic.social.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  aria-label={social.name}
                >
                  {socialIcons[social.icon]}
                </motion.a>
              ))}
              <motion.a
                href={`mailto:${basic.email}`}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                aria-label="Email"
              >
                <FiMail size={20} />
              </motion.a>
            </div>
            
            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/resume.pdf"
                className="px-6 py-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                download
              >
                Download CV <FiDownload size={18} />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto overflow-hidden rounded-full border-4 border-blue-600 dark:border-blue-400 shadow-xl">
              {/* Placeholder image - replace with actual image path from portfolioData */}
              <Image
                src={basic.avatar || "/images/placeholder-profile.jpg"}
                alt={basic.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 