"use client";

import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import portfolioData from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            My professional journey and the companies I've worked with.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

            {/* Experience items */}
            {experience.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 transform md:translate-x-[-50%] w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-400 z-10 mt-2"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-10 md:ml-0`}>
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-100 dark:border-gray-800 relative">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold">{item.position}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1 md:mt-0">
                        <FiCalendar size={14} />
                        {item.duration}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <FiBriefcase size={16} className="text-blue-600 dark:text-blue-400" />
                      <h4 className="font-medium">{item.company}</h4>
                      
                      <div className="mx-2 w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <FiMapPin size={14} />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {item.description}
                    </p>
                    
                    {item.achievements && (
                      <div>
                        <h5 className="font-medium mb-2">Key Achievements:</h5>
                        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1">
                          {item.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 