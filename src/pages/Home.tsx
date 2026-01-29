import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AnimatedBlobs from '../components/effects/AnimatedBlobs';
import Button from '../components/common/Button';
import { staggerContainer, staggerItem } from '../utils/animations';
import styles from './Home.module.css';

const Home: React.FC = () => {
  useScrollAnimation();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    // Animate title text
    const title = document.getElementById('animatedTitle');
    if (title) {
      const text = title.textContent || '';
      title.innerHTML = '';
      text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.className = 'word';
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay = `${index * 0.1}s`;
        title.appendChild(span);
      });
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setTilt({ x: y * 20, y: -x * 20 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className={styles.page}>
      <AnimatedBlobs />
      <div className="container">
        <motion.div 
          className={styles.hero}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className={styles.heroImage}
            style={{ y }}
            variants={staggerItem}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img 
              src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/ee3037e3-4bf2-4396-ba1e-cd6d4b627f32.png" 
              alt="Portrait of Joey Audi"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.3s ease-out'
              }}
            />
          </motion.div>
          <motion.div className={styles.heroContent} variants={staggerItem}>
            <motion.h1 
              className={styles.animatedText} 
              id="animatedTitle"
              variants={staggerItem}
            >
              Joey Audi
            </motion.h1>
            <motion.h2 variants={staggerItem}>
              Audiovisual Technician · Event Management · Community Engagement
            </motion.h2>
            <motion.p variants={staggerItem}>
              Experienced audiovisual professional with expertise in cinematography, event coordination, 
              and community-focused customer support. I bring technical precision and creative storytelling 
              together to deliver engaging live events, media content, and player experiences.
            </motion.p>
            <motion.div className={styles.heroButtons} variants={staggerItem}>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(32, 144, 237, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Button href="/JoeyAudi_General-Resume.pdf" download variant="primary">
                  Download Resume
                </Button>
              </motion.div>
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline">Contact Me</Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
