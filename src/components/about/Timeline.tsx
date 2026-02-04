import React from 'react';
import { timelineItems } from '../../data/timelineData';
import styles from './Timeline.module.css';

const Timeline: React.FC = () => {
  return (
    <div className={styles.timeline}>
      {timelineItems.map((item, index) => (
        <div key={item.id} className={`${styles.timelineItem} fade-in`}>
          <div className={styles.timelineDot}></div>
          <div className={styles.timelineContent}>
            <h3>{item.title}</h3>
            <p className={styles.timelineCompany}>
              {item.company}
              {item.location && ` | ${item.period} | ${item.location}`}
              {!item.location && ` | ${item.period}`}
            </p>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Memoize to optimize About page performance
export default React.memo(Timeline);
