import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { staggerContainer, staggerItem } from '../utils/animations';
import GlassmorphicCard from '../components/common/GlassmorphicCard';
import GradientText from '../components/common/GradientText';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  useScrollAnimation();

  return (
    <div className={styles.page}>
      <div className={styles.gradientBg}></div>
      <div className="container">
        <GradientText as="h1" gradient="primary" className="section-title fade-in">
          Let's Connect
        </GradientText>
        
        <motion.div 
          className={styles.contactWrapper}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <GlassmorphicCard 
            className={styles.contactIntro}
            hover={false}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I'm currently based in Tampere, Finland (EET timezone) and available for full-time 
              positions, contract work, or project collaborations in audiovisual production, event 
              coordination, and content creation. The fastest way to reach me is via email at 
              contact@joeyaudi.com or through LinkedIn.
            </p>
            <div className={styles.availabilityBadge}>
              <span className={styles.pulseDot}></span>
              Available for opportunities
            </div>
          </GlassmorphicCard>

          <motion.div className={styles.contactMethodsGrid} variants={staggerItem}>
            <a href="mailto:contact@joeyaudi.com" style={{ textDecoration: 'none' }}>
              <GlassmorphicCard
                className={styles.contactCard}
                gradient="primary"
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={styles.cardIcon}>
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>Email</h3>
                <p>contact@joeyaudi.com</p>
                <span className={styles.cardAction}>Send an email →</span>
              </GlassmorphicCard>
            </a>

            <a href="https://www.linkedin.com/in/joeyaudi" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <GlassmorphicCard
                className={styles.contactCard}
                gradient="secondary"
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={styles.cardIcon}>
                  <i className="fab fa-linkedin"></i>
                </div>
                <h3>LinkedIn</h3>
                <p>Connect professionally</p>
                <span className={styles.cardAction}>View profile →</span>
              </GlassmorphicCard>
            </a>

            <a href="https://www.instagram.com/joeyaudi2/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <GlassmorphicCard
                className={styles.contactCard}
                gradient="accent"
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={styles.cardIcon}>
                  <i className="fab fa-instagram"></i>
                </div>
                <h3>Instagram</h3>
                <p>Follow my journey</p>
                <span className={styles.cardAction}>View profile →</span>
              </GlassmorphicCard>
            </a>

            <GlassmorphicCard
              className={`${styles.contactCard} ${styles.infoCard}`}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <div className={styles.cardIcon}>
                <i className="fas fa-globe"></i>
              </div>
              <h3>Location</h3>
              <p>Tampere, Finland</p>
              <span className={styles.cardInfo}>EET (UTC+2/+3)</span>
            </GlassmorphicCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
