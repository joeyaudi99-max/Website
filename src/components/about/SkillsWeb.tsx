import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillsWithLevels } from '../../data/aboutData';
import styles from './SkillsWeb.module.css';

const SkillsWeb: React.FC = () => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const isInView = useInView(ref as any, { once: true, amount: 0.2 });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'technical': return '#2090ed';
      case 'creative': return '#9c27b0';
      case 'soft': return '#00bcd4';
      default: return '#2090ed';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'technical': return '⚙️ Technical';
      case 'creative': return '🎨 Creative';
      case 'soft': return '🤝 Soft Skills';
      default: return '';
    }
  };

  return (
    <div className={`${styles.skillsWeb} fade-in`} ref={(el) => setRef(el)}>
      {skillsWithLevels.map((skill, index) => (
        <motion.div 
          key={index} 
          className={styles.skillItem}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: index * 0.05, duration: 0.5 }}
        >
          <div className={styles.skillHeader}>
            <span className={styles.skillName}>{skill.name}</span>
            <span className={styles.skillCategory} style={{ color: getCategoryColor(skill.category) }}>
              {getCategoryLabel(skill.category)}
            </span>
          </div>
          <div className={styles.progressBarContainer}>
            <motion.div
              className={styles.progressBar}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ delay: index * 0.05 + 0.3, duration: 1, ease: "easeOut" }}
              style={{ backgroundColor: getCategoryColor(skill.category) }}
            />
            <motion.span
              className={styles.progressPercent}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.05 + 0.5 }}
            >
              {skill.level}%
            </motion.span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsWeb;
