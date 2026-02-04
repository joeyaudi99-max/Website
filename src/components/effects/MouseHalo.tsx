import React from 'react';
import { useMouseHalo } from '../../hooks/useMouseHalo';
import styles from './MouseHalo.module.css';

const MouseHalo: React.FC = () => {
  const { haloPosition, isActive } = useMouseHalo();

  return (
    <div
      className={`${styles.mouseHalo} ${isActive ? styles.active : ''}`}
      style={{
        left: `${haloPosition.x}px`,
        top: `${haloPosition.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
};

export default MouseHalo;
