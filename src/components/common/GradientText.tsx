import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import styles from './GradientText.module.css';

interface GradientTextProps extends Omit<HTMLMotionProps<"span">, 'children'> {
  children: React.ReactNode;
  gradient?: 'primary' | 'secondary' | 'accent' | 'warm' | 'cool';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  animated?: boolean;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  gradient = 'primary',
  as = 'span',
  animated = false,
  className = '',
  ...motionProps
}) => {
  const Component = motion[as] as any;
  
  const textClass = `
    ${styles.gradientText}
    ${styles[gradient]}
    ${animated ? styles.animated : ''}
    ${className}
  `.trim();

  return (
    <Component
      className={textClass}
      {...motionProps}
    >
      {children}
    </Component>
  );
};

export default GradientText;
