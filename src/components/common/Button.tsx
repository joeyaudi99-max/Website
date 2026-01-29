import React from 'react';
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
      <a 
        href={href} 
        className={className}
        download={download}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type}
      className={className} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
