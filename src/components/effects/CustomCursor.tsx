import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import styles from './CustomCursor.module.css';

const CustomCursor: React.FC = () => {
  const [cursorSize, setCursorSize] = useState(10);
  const [cursorVariant, setCursorVariant] = useState('default');
  
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button') || target.closest('a')) {
        setCursorSize(40);
        setCursorVariant('hover');
      }
    };

    const handleMouseLeave = () => {
      setCursorSize(10);
      setCursorVariant('default');
    };

    window.addEventListener('mousemove', moveCursor);
    
    // Add listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className={`${styles.cursor} ${styles[cursorVariant]}`}
        style={{
          x: cursorX,
          y: cursorY,
          width: cursorSize,
          height: cursorSize,
        }}
      />
      <motion.div
        className={`${styles.cursorTrail} ${styles[cursorVariant]}`}
        style={{
          x: cursorX,
          y: cursorY,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
