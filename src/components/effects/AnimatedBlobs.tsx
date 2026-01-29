import React from 'react';
import styles from './AnimatedBlobs.module.css';

const AnimatedBlobs: React.FC = () => {
  return (
    <div className={styles.heroBackground}>
      <div className={`${styles.animatedBlob} ${styles.blob1}`}></div>
      <div className={`${styles.animatedBlob} ${styles.blob2}`}></div>
    </div>
  );
};

export default AnimatedBlobs;
