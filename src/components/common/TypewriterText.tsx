import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import styles from './TypewriterText.module.css';

interface TypewriterTextProps {
  sequence: (string | number)[];
  speed?: any;
  deletionSpeed?: any;
  repeat?: number;
  cursor?: boolean;
  className?: string;
  wrapper?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  sequence,
  speed = 50,
  deletionSpeed = 50,
  repeat = Infinity,
  cursor = true,
  className = '',
  wrapper = 'span',
}) => {
  return (
    <TypeAnimation
      sequence={sequence}
      speed={speed}
      deletionSpeed={deletionSpeed}
      repeat={repeat}
      cursor={cursor}
      className={`${styles.typewriter} ${className}`}
      wrapper={wrapper}
    />
  );
};

export default TypewriterText;
