import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './SkillCircle.module.css';

interface SkillCircleProps {
  name: string;
  level: number;
  category?: string;
  color?: string;
  index?: number;
}

const SkillCircle: React.FC<SkillCircleProps> = ({
  name,
  level,
  category,
  color = '#667eea',
  index = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const circumference = 2 * Math.PI * 45; // radius is 45
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      className={styles.skillCircle}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <div className={styles.circleContainer}>
        <svg className={styles.circle} width="120" height="120">
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke="var(--border-color)"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <motion.circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={isInView ? { strokeDashoffset } : {}}
            transition={{ delay: index * 0.05 + 0.1, duration: 0.8, ease: 'easeOut' }}
            transform="rotate(-90 60 60)"
            style={{ filter: `drop-shadow(0 0 8px ${color}40)` }}
          />
        </svg>
        <div className={styles.percentage}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.05 + 0.3 }}
          >
            {level}%
          </motion.span>
        </div>
      </div>
      <div className={styles.skillInfo}>
        <h4>{name}</h4>
        {category && <span className={styles.category}>{category}</span>}
      </div>
    </motion.div>
  );
};

export default SkillCircle;
