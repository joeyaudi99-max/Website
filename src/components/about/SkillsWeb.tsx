import React from 'react';
import { skills } from '../../data/aboutData';
import styles from './SkillsWeb.module.css';

const SkillsWeb: React.FC = () => {
  return (
    <div className={`${styles.skillsWeb} fade-in`}>
      {skills.map((skill, index) => (
        <div key={index} className={styles.skillItem}>
          {skill}
        </div>
      ))}
    </div>
  );
};

export default SkillsWeb;
