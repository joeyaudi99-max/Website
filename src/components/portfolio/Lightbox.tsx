import React, { useEffect, useState } from 'react';
import styles from './Lightbox.module.css';

interface LightboxProps {
  isOpen: boolean;
  imageSrc: string | null;
  imageAlt: string;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  totalImages?: number;
}

const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  imageSrc,
  imageAlt,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalImages
}) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (onPrev) onPrev();
          break;
        case 'ArrowRight':
          if (onNext) onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Manage rendering state to allow exit transition
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      // Delay unmounting to allow exit transition to complete (300ms transition + 50ms buffer)
      const timer = setTimeout(() => {
        setShouldRender(false);
        // Ensure body overflow is reset
        document.body.style.overflow = '';
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender || !imageSrc) {
    // Ensure overflow is reset when component is not rendering
    if (document.body.style.overflow === 'hidden') {
      document.body.style.overflow = '';
    }
    return null;
  }

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={`${styles.lightboxModal} ${isOpen ? styles.active : ''}`}
      onClick={handleBackgroundClick}
    >
      <div className={styles.lightboxContent}>
        <button 
          className={styles.lightboxClose}
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <i className="fas fa-times"></i>
        </button>

        {onPrev && totalImages && totalImages > 1 && (
          <button 
            className={`${styles.lightboxNav} ${styles.prev}`}
            onClick={onPrev}
            aria-label="Previous image"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
        )}

        <img 
          src={imageSrc} 
          alt={imageAlt}
          className={styles.lightboxImage}
        />

        {onNext && totalImages && totalImages > 1 && (
          <button 
            className={`${styles.lightboxNav} ${styles.next}`}
            onClick={onNext}
            aria-label="Next image"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        )}

        {typeof currentIndex === 'number' && totalImages && totalImages > 1 && (
          <div className={styles.lightboxCounter}>
            {currentIndex + 1} / {totalImages}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lightbox;
