import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AnimatedBlobs from '../components/effects/AnimatedBlobs';
import Button from '../components/common/Button';
import styles from './Home.module.css';

const Home: React.FC = () => {
  useScrollAnimation();

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

  return (
    <div className={styles.page}>
      <AnimatedBlobs />
      <div className="container">
        <div className={styles.hero}>
          <div className={styles.heroImage}>
            <img 
              src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/ee3037e3-4bf2-4396-ba1e-cd6d4b627f32.png" 
              alt="Portrait of Joey Audi" 
            />
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.animatedText} id="animatedTitle">Joey Audi</h1>
            <h2>Audiovisual Technician · Event Management · Community Engagement</h2>
            <p>
              Experienced audiovisual professional with expertise in cinematography, event coordination, 
              and community-focused customer support. I bring technical precision and creative storytelling 
              together to deliver engaging live events, media content, and player experiences.
            </p>
            <div className={styles.heroButtons}>
              <Button href="/JoeyAudi_General-Resume.pdf" download variant="primary">
                Download Resume
              </Button>
              <Link to="/contact">
                <Button variant="outline">Contact Me</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
