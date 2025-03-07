"use client";

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';
import portfolioData from '../data/portfolioData';

const Footer = () => {
  const { basic } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-2xl font-bold">
              Portfolio<span className="text-blue-400">.dev</span>
            </Link>
            <p className="mt-2 text-gray-400 max-w-md">
              A professional portfolio template showcasing skills, experience, and projects.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              {basic.social.map((social) => {
                const icons = {
                  github: <FiGithub size={20} />,
                  linkedin: <FiLinkedin size={20} />,
                  twitter: <FiTwitter size={20} />,
                };
                
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    aria-label={social.name}
                  >
                    {icons[social.icon]}
                  </a>
                );
              })}
            </div>
            
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <FiArrowUp size={20} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; {currentYear} {basic.name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6">
            <Link href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
              About
            </Link>
            <Link href="#experience" className="text-gray-400 hover:text-white transition-colors duration-300">
              Experience
            </Link>
            <Link href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 