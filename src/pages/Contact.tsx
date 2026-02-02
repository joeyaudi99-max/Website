import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { staggerContainer, staggerItem } from '../utils/animations';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  useScrollAnimation();

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
          <motion.div className={styles.contactIntro} variants={staggerItem}>
            <p>
              I'm currently based in Tampere, Finland (EET timezone) and available for full-time 
              positions, contract work, or project collaborations in audiovisual production, event 
              coordination, and content creation. The fastest way to reach me is via email at 
              contact@joeyaudi.com or through LinkedIn.
            </p>
          </motion.div>

          <motion.div className={styles.contactMethodsGrid} variants={staggerItem}>
            <motion.a 
              href="mailto:contact@joeyaudi.com"
              className={styles.contactCard}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.cardIcon}>
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <p>contact@joeyaudi.com</p>
              <span className={styles.cardAction}>Send an email →</span>
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/joeyaudi"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.cardIcon}>
                <i className="fab fa-linkedin"></i>
              </div>
              <h3>LinkedIn</h3>
              <p>Connect professionally</p>
              <span className={styles.cardAction}>View profile →</span>
            </motion.a>

            <motion.a 
              href="https://www.instagram.com/joeyaudi2/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.cardIcon}>
                <i className="fab fa-instagram"></i>
              </div>
              <h3>Instagram</h3>
              <p>Follow my journey</p>
              <span className={styles.cardAction}>View profile →</span>
            </motion.a>

            <motion.div 
              className={`${styles.contactCard} ${styles.infoCard}`}
              variants={staggerItem}
            >
              <div className={styles.cardIcon}>
                <i className="fas fa-globe"></i>
              </div>
              <h3>Location</h3>
              <p>Tampere, Finland</p>
              <span className={styles.cardInfo}>EET (UTC+2/+3)</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
