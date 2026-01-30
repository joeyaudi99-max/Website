import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContainer}>
          <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
            <motion.span
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.85, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              JA
            </motion.span>
          </Link>

          <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? styles.active : ''} 
                onClick={closeMobileMenu}
              >
                <span>Home</span>
                {isActive('/') && (
                  <motion.div 
                    className={styles.activeIndicator}
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActive('/about') ? styles.active : ''} 
                onClick={closeMobileMenu}
              >
                <span>About</span>
                {isActive('/about') && (
                  <motion.div 
                    className={styles.activeIndicator}
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </li>
            <li>
              <Link 
                to="/portfolio" 
                className={isActive('/portfolio') ? styles.active : ''} 
                onClick={closeMobileMenu}
              >
                <span>Portfolio</span>
                {isActive('/portfolio') && (
                  <motion.div 
                    className={styles.activeIndicator}
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? styles.active : ''} 
                onClick={closeMobileMenu}
              >
                <span>Contact</span>
                {isActive('/contact') && (
                  <motion.div 
                    className={styles.activeIndicator}
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          </ul>

          <div className={styles.navRight}>
            <div className={styles.socialIcons}>
              <a 
                href="https://www.instagram.com/joeyaudi2/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/joeyaudi" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="mailto:contact@joeyaudi.com"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <motion.button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: 180 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}></i>
            </motion.button>
          </div>

          <div 
            className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={handleMobileMenuToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
