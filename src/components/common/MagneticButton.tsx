import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './MagneticButton.module.css';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  download?: boolean | string;
  variant?: 'primary' | 'outline' | 'gradient';
  strength?: number;
  className?: string;
  disabled?: boolean;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  href,
  download,
  variant = 'primary',
  strength = 0.3,
  className = '',
  disabled = false,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || window.innerWidth < 768) return;

    const button = buttonRef.current;
    if (!button) return;

    try {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      setPosition({ x: deltaX, y: deltaY });
    } catch (error) {
      // Ref might be null during transition, safely ignore
      return;
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const buttonClass = `
    ${styles.magneticButton}
    ${styles[variant]}
    ${disabled ? styles.disabled : ''}
    ${className}
  `.trim();

  const buttonContent = (
    <motion.div
      ref={buttonRef}
      className={buttonClass}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={disabled ? undefined : onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
    >
      <motion.div className={styles.content}>
        {children}
      </motion.div>
      <motion.div 
        className={styles.glow}
        animate={{ opacity: position.x !== 0 || position.y !== 0 ? 0.6 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} download={download} style={{ textDecoration: 'none', display: 'inline-block' }}>
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};

export default MagneticButton;
