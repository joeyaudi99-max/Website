import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { staggerContainer, staggerItem } from '../utils/animations';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration - Replace these with your actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Joey Audi',
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please email me directly at contact@joeyaudi.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className="section-title fade-in">Let's Connect</h1>
        
        <motion.div 
          className={styles.contactWrapper}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className={styles.contactInfo} variants={staggerItem}>
            <h2>Get in Touch</h2>
            <p>
              I'm always open to discussing new opportunities, collaborations, or just connecting 
              with fellow professionals in the audiovisual and event management space.
            </p>
            
            <div className={styles.contactMethods}>
              <motion.a 
                href="mailto:contact@joeyaudi.com"
                className={styles.contactMethod}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>✉️</span>
                <span>contact@joeyaudi.com</span>
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/in/joeyaudi"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactMethod}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>💼</span>
                <span>LinkedIn Profile</span>
              </motion.a>
              
              <motion.a 
                href="https://github.com/joeyaudi"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactMethod}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>💻</span>
                <span>GitHub Profile</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.form 
            className={styles.contactForm}
            onSubmit={handleSubmit}
            variants={staggerItem}
          >
            <h2>Send a Message</h2>
            
            <div className={styles.formGroup}>
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? styles.error : ''}
                whileFocus={{ scale: 1.02 }}
                disabled={submitted}
              />
              {errors.name && (
                <motion.span 
                  className={styles.errorText}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errors.name}
                </motion.span>
              )}
            </div>

            <div className={styles.formGroup}>
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? styles.error : ''}
                whileFocus={{ scale: 1.02 }}
                disabled={submitted}
              />
              {errors.email && (
                <motion.span 
                  className={styles.errorText}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errors.email}
                </motion.span>
              )}
            </div>

            <div className={styles.formGroup}>
              <motion.input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? styles.error : ''}
                whileFocus={{ scale: 1.02 }}
                disabled={submitted}
              />
              {errors.subject && (
                <motion.span 
                  className={styles.errorText}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errors.subject}
                </motion.span>
              )}
            </div>

            <div className={styles.formGroup}>
              <motion.textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={errors.message ? styles.error : ''}
                whileFocus={{ scale: 1.02 }}
                disabled={submitted}
              />
              <span className={styles.charCount}>
                {formData.message.length} / 1000
              </span>
              {errors.message && (
                <motion.span 
                  className={styles.errorText}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errors.message}
                </motion.span>
              )}
            </div>

            <motion.button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting || submitted}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? (
                <>
                  <span className={styles.spinner}></span>
                  Sending...
                </>
              ) : submitted ? (
                <>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    ✓
                  </motion.span>
                  Sent!
                </>
              ) : (
                <>
                  <span>✈️</span>
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
