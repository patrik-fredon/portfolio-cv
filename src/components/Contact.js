"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import portfolioData from '../data/portfolioData';

const Contact = () => {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send the form data to a backend or service like Formspree
      // For demo purposes, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Feel free to reach out if you have any questions or want to work together.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <a 
                    href={`mailto:${contact.email}`} 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <a 
                    href={`tel:${contact.phone}`} 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {contact.address}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800">
              <h4 className="text-lg font-medium mb-4">Availability</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                I&apos;m currently available for freelance work and full-time positions.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                If you have a project that needs some creative work, I&apos;d love to hear about it!
              </p>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                ></textarea>
              </div>
              
              {submitStatus && (
                <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <FiSend size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 