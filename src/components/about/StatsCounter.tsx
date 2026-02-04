import React, { useEffect, useState, useRef } from 'react';
import { stats } from '../../data/aboutData';
import styles from './StatsCounter.module.css';

const StatsCounter: React.FC = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.count / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.count) {
          current = stat.count;
          clearInterval(timer);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, duration / steps);
    });
  };

  return (
    <div ref={statsRef} className={`${styles.stats} fade-in`}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statItem}>
          <span className={styles.statNumber}>{counts[index]}</span>
          <span className={styles.statLabel}>{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatsCounter;
