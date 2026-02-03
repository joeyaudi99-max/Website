import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import styles from './GlassmorphicCard.module.css';

interface GlassmorphicCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  strength?: 'normal' | 'strong';
  hover?: boolean;
  gradient?: 'primary' | 'secondary' | 'accent' | 'none';
  className?: string;
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({
  children,
  strength = 'normal',
  hover = true,
  gradient = 'none',
  className = '',
  ...motionProps
}) => {
  const cardClass = `
    ${styles.glassCard}
    ${strength === 'strong' ? styles.strong : ''}
    ${hover ? styles.hover : ''}
    ${gradient !== 'none' ? styles[`gradient${gradient.charAt(0).toUpperCase() + gradient.slice(1)}`] : ''}
    ${className}
  `.trim();

  return (
    <motion.div
      className={cardClass}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default GlassmorphicCard;
