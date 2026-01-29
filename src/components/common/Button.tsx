import React from 'react';
import { motion } from 'framer-motion';
import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  download?: boolean | string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  onClick, 
  href,
  download,
  type = 'button'
}) => {
  const className = `${styles.btn} ${variant === 'outline' ? styles.btnOutline : styles.btnPrimary}`;

  if (href) {
    return (
      <motion.a 
        href={href} 
        className={className}
        download={download}
        onClick={onClick}
        whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(32, 144, 237, 0.3)' }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button 
      type={type}
      className={className} 
      onClick={onClick}
      whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(32, 144, 237, 0.3)' }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
