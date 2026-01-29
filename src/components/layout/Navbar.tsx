import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContainer}>
          <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
            JA
          </Link>

          <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? styles.active : ''} 
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActive('/about') ? styles.active : ''} 
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/portfolio" 
                className={isActive('/portfolio') ? styles.active : ''} 
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? styles.active : ''} 
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className={styles.navRight}>
            <div className={styles.socialIcons}>
              <a 
                href="https://www.linkedin.com/in/joeyaudi" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="https://github.com/joeyaudi" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}></i>
            </button>
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
