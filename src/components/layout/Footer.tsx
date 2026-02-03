import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GradientText from '../common/GradientText';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <motion.div 
            className={styles.footerBrand}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <GradientText as="h3" gradient="primary" className={styles.brandName}>
              Joey Audi
            </GradientText>
            <p className={styles.tagline}>
              Audiovisual Technician · Event Coordinator · Content Creator
            </p>
          </motion.div>

          <motion.div 
            className={styles.footerLinks}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.4 }}
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </motion.div>

          <motion.div 
            className={styles.footerSocial}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <a 
              href="https://www.linkedin.com/in/joeyaudi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="https://www.instagram.com/joeyaudi2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a 
              href="mailto:contact@joeyaudi.com"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </motion.div>
        </div>

        <motion.div 
          className={styles.footerBottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <p>&copy; {currentYear} Joey Audi. All rights reserved.</p>
          <p className={styles.madeWith}>
            Made with dedication in Tampere, Finland
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
