import React, { useRef } from 'react';
import styles from './BeforeAfterSlider.module.css';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = 'Before',
  afterAlt = 'After'
}) => {
  const handleRef = useRef<HTMLDivElement>(null);
  const afterImageRef = useRef<HTMLImageElement>(null);
  const cachedRect = useRef<DOMRect | null>(null);

  const applyPosition = (clientX: number, rect: DOMRect) => {
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    if (handleRef.current)     handleRef.current.style.left     = `${pct}%`;
    if (afterImageRef.current) afterImageRef.current.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    const rect = e.currentTarget.getBoundingClientRect();
    cachedRect.current = rect;
    applyPosition(e.clientX, rect);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
    applyPosition(e.clientX, cachedRect.current!);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    cachedRect.current = null;
  };

  return (
    <div
      className={styles.beforeAfterSlider}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="img"
      aria-label="Before and after comparison"
    >
      <img
        src={beforeImage}
        alt={beforeAlt}
        className={styles.beforeImage}
      />
      <img
        ref={afterImageRef}
        src={afterImage}
        alt={afterAlt}
        className={styles.afterImage}
        style={{ clipPath: 'inset(0 50% 0 0)' }}
      />
      <div
        ref={handleRef}
        className={styles.sliderHandle}
        style={{ left: '50%' }}
        role="slider"
        aria-label="Drag to compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={50}
        tabIndex={0}
      >
        <div className={styles.sliderKnob}>
          <i className="fas fa-chevron-left"></i>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div className={`${styles.sliderLabel} ${styles.beforeLabel}`}>Before</div>
      <div className={`${styles.sliderLabel} ${styles.afterLabel}`}>After</div>
    </div>
  );
};

export default BeforeAfterSlider;
