import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './LoadingScreen.module.css';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  minDuration?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onLoadingComplete,
  minDuration = 1000,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onLoadingComplete) {
        setTimeout(onLoadingComplete, 600); // Wait for exit animation
      }
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration, onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={styles.loadingScreen}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <div className={styles.content}>
            {/* Logo Animation */}
            <motion.div
              className={styles.logoContainer}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <motion.div
                className={styles.logo}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2,
                  ease: 'linear',
                  repeat: Infinity,
                }}
              >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="35"
                    stroke="url(#gradient1)"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#667eea" />
                      <stop offset="100%" stopColor="#764ba2" />
                    </linearGradient>
                  </defs>
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="url(#gradient1)"
                    fontSize="36"
                    fontWeight="700"
                    fontFamily="Montserrat, sans-serif"
                  >
                    JA
                  </text>
                </svg>
              </motion.div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className={styles.loadingText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <span>Loading</span>
              <motion.span
                className={styles.dots}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              >
                ...
              </motion.span>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              className={styles.progressBar}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <motion.div
                className={styles.progressFill}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.0, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
