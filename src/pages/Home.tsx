import React, { lazy, Suspense, useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';
import TypewriterText from '../components/common/TypewriterText';
import MagneticButton from '../components/common/MagneticButton';
import GradientText from '../components/common/GradientText';
import { staggerContainer, staggerItem } from '../utils/animations';
import styles from './Home.module.css';

// Lazy load heavy ParticleBackground to reduce initial bundle size
const ParticleBackground = lazy(() => import('../components/effects/ParticleBackground'));

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
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Joey Audi",
    "jobTitle": "Audiovisual Marketing Specialist",
    "description": "Audiovisual marketing specialist with hands-on experience in content creation, newsletter planning, visual branding, and campaign execution.",
    "url": "https://joeyaudi.com",
    "image": "https://joeyaudi.com/Media/Profile.jpg",
    "sameAs": [
      "https://www.instagram.com/joeyaudi2/",
      "https://www.linkedin.com/in/joey-audi"
    ]
  };

  return (
    <div className={styles.page}>
      <SEO 
        title="Joey Audi - Audiovisual Marketing Specialist"
        description="Audiovisual marketing specialist with hands-on experience in content creation, newsletter planning, visual branding, and campaign execution. View my portfolio."
        type="profile"
        structuredData={structuredData}
      />
      <Suspense fallback={<div />}>
        <ParticleBackground density={60} color="#667eea" opacity={0.4} speed={0.5} links={true} />
      </Suspense>
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
              loading="lazy"
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
                  'Audiovisual Marketing Specialist',
                  2500,
                  'Event and Brand Specialist',
                  2500,
                ]}
                speed={50}
                wrapper="h2"
                className={styles.role}
              />
            </motion.div>
            <motion.p variants={staggerItem} className={styles.description}>
              I bring a visual storyteller's perspective to digital marketing and brand development. 
              From planning newsletters and multi-platform campaigns to producing marketing materials 
              and updating websites, I take a hands-on, results-driven approach to growing brand 
              visibility. Having coordinated international events for up to 600 people and managed 
              audiovisual content across five social media channels, I know how to build audience 
              engagement at scale. Based in Finland, fluent in English, Arabic, and French.
            </motion.p>
            <motion.div className={styles.heroButtons} variants={staggerItem}>
              <Link to="/portfolio" style={{ textDecoration: 'none' }}>
                <MagneticButton variant="gradient" strength={0}>
                  View Portfolio
                </MagneticButton>
              </Link>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <MagneticButton variant="outline" strength={0}>
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
