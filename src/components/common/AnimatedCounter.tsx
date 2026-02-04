import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import styles from './AnimatedCounter.module.css';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
  onComplete?: () => void;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
  onComplete,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) =>
    (Math.floor(current * Math.pow(10, decimals)) / Math.pow(10, decimals)).toFixed(decimals)
  );

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
      
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, duration * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, hasAnimated, spring, value, duration, onComplete]);

  return (
    <div ref={ref} className={`${styles.counter} ${className}`}>
      <motion.span className={styles.value}>
        {prefix}
        <motion.span>{display}</motion.span>
        {suffix}
      </motion.span>
    </div>
  );
};

export default AnimatedCounter;
