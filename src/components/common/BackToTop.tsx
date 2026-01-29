import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './BackToTop.module.css';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      className={styles.backToTop}
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Back to top"
    >
      <svg className={styles.progressRing} width="60" height="60">
        <circle
          className={styles.progressRingCircle}
          stroke="var(--primary-color)"
          strokeWidth="2"
          fill="transparent"
          r="27"
          cx="30"
          cy="30"
        />
        <motion.circle
          className={styles.progressRingProgress}
          stroke="var(--primary-color)"
          strokeWidth="2"
          fill="transparent"
          r="27"
          cx="30"
          cy="30"
          style={{
            pathLength: scaleProgress
          }}
        />
      </svg>
      <span className={styles.icon}>↑</span>
    </motion.button>
  );
};

export default BackToTop;
