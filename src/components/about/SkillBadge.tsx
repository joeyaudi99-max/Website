import React from 'react';
import { motion } from 'framer-motion';
import styles from './SkillBadge.module.css';

interface SkillBadgeProps {
  name: string;
  category: 'technical' | 'creative' | 'soft';
  index?: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, category, index = 0 }) => {
  return (
    <motion.div
      className={`${styles.skillBadge} ${styles[category]}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      {name}
    </motion.div>
  );
};

export default SkillBadge;
