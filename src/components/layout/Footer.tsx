import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>&copy; 2025 Joey Audi</p>
        <p>
          <a href="mailto:contact@joeyaudi.com">Contact Me</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
