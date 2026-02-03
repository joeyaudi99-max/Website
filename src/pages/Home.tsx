import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ParticleBackground from '../components/effects/ParticleBackground';
import TypewriterText from '../components/common/TypewriterText';
import MagneticButton from '../components/common/MagneticButton';
import GradientText from '../components/common/GradientText';
import { staggerContainer, staggerItem } from '../utils/animations';
import styles from './Home.module.css';

const Home: React.FC = () => {
  useScrollAnimation();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 75]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    const target = e.currentTarget;
    if (!target) return;
    
    rafRef.current = requestAnimationFrame(() => {
      try {
        const rect = target.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setTilt({ x: y * 8, y: -x * 8 });
      } catch (error) {
        // Element might be unmounted, safely ignore
        return;
      }
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    setTilt({ x: 0, y: 0 });
  }, []);
  
  return (
    <div className={styles.page}>
      <ParticleBackground density={60} color="#667eea" opacity={0.4} speed={0.5} links={true} />
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
            <div className={styles.imageGlow}></div>
            <motion.img 
              src="/Media/Profile.jpg" 
              alt="Portrait of Joey Audi"
              className={styles.profileImage}
              loading="eager"
              width="300"
              height="300"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.3s ease-out'
              }}
            />
          </motion.div>
          <motion.div className={styles.heroContent} variants={staggerItem}>
            <GradientText as="h1" gradient="primary" className={styles.name}>
              Joey Audi
            </GradientText>
            <motion.div variants={staggerItem} className={styles.roleContainer}>
              <TypewriterText
                sequence={[
                  'Audiovisual Technician',
                  2000,
                  'Event Coordinator',
                  2000,
                  'Community Manager',
                  2000,
                  'Content Creator',
                  2000,
                ]}
                speed={50}
                wrapper="h2"
                className={styles.role}
              />
            </motion.div>
            <motion.p variants={staggerItem} className={styles.description}>
              I've coordinated 30+ annual events for 600+ international participants, operated AV systems 
              in arena-scale gaming spaces, and edited 60+ videos monthly for multi-platform distribution. 
              Based in Tampere, Finland, I specialize in making technical setups run smoothly while keeping 
              people engaged and comfortable—whether that's troubleshooting VR headsets, managing live event 
              tech, or cutting promotional content on tight deadlines.
            </motion.p>
            <motion.div className={styles.heroButtons} variants={staggerItem}>
              <MagneticButton href="/JoeyAudi_General-Resume.pdf" download variant="gradient">
                Download Resume
              </MagneticButton>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <MagneticButton variant="outline">
                  Contact Me
                </MagneticButton>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
