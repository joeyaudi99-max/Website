import React, { useState, useEffect, useRef, useMemo } from 'react';
import styles from './ImageCarousel.module.css';

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoRotate?: boolean;
  lightboxGroup?: string;
  onImageClick?: (index: number) => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  autoRotate = false,
  lightboxGroup,
  onImageClick
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const changeSlide = (direction: number) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return images.length - 1;
      if (newIndex >= images.length) return 0;
      return newIndex;
    });
  };

  const startAutoRotate = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (autoRotate && !isPaused) {
      timeoutRef.current = setTimeout(() => {
        changeSlide(1);
      }, 6000);
    }
  };

  useEffect(() => {
    startAutoRotate();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isPaused, autoRotate]);

  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick(currentIndex);
    }
  };

  return (
    <div 
      className={styles.imageCarousel}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <button 
        className={`${styles.carouselArrow} ${styles.prev}`}
        onClick={() => changeSlide(-1)}
        aria-label="Previous image"
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      <div 
        className={styles.carouselSliderWrapper}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.carouselSlide}>
            <img
              src={image.src}
              alt={image.alt}
              className={`${styles.carouselImage} ${lightboxGroup ? 'lightbox-trigger' : ''}`}
              data-lightbox-group={lightboxGroup}
              onClick={handleImageClick}
              style={{ cursor: onImageClick ? 'pointer' : 'default' }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <button 
        className={`${styles.carouselArrow} ${styles.next}`}
        onClick={() => changeSlide(1)}
        aria-label="Next image"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Thumbnail Preview Strip */}
      {images.length > 1 && (
        <div className={styles.thumbnailStrip}>
          {images.map((image, index) => (
            <button
              key={index}
              className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Preview image ${index + 1}`}
            >
              <img src={image.src} alt={`Thumbnail ${index + 1}`} loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
