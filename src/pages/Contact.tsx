import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  useScrollAnimation();

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className="section-title fade-in">Let's Connect</h1>
        
        <div className={styles.articlesGrid}>
          <div className={`${styles.articleItem} fade-in`}>
            <div className={styles.articleImage}></div>
            <div className={styles.articleContent}>
              <div className={styles.articleDate}>Email</div>
              <h2 className={styles.articleTitle}>Contact Information</h2>
              <div className={styles.articleSummary}>
                <p>
                  I'm always open to discussing new opportunities, collaborations, or just connecting with fellow professionals in the audiovisual and event management space.
                </p>
                <p>
                  Feel free to reach out to me at:{' '}
                  <a href="mailto:contact@joeyaudi.com">contact@joeyaudi.com</a>
                </p>
                <p>
                  You can also find me on:{' '}
                  <a href="https://www.linkedin.com/in/joeyaudi" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  {' '}and{' '}
                  <a href="https://github.com/joeyaudi" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
