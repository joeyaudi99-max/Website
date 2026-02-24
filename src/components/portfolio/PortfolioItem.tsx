import React, { useState, useCallback } from 'react';
import { PortfolioItem as PortfolioItemType } from '../../data/portfolioData';
import ImageCarousel from './ImageCarousel';
import BeforeAfterSlider from './BeforeAfterSlider';
import styles from './PortfolioItem.module.css';

interface PortfolioItemProps {
  item: PortfolioItemType;
  onImageClick: (imageSrc: string, imageAlt: string, lightboxGroup?: string) => void;
  onCaseStudyClick?: (itemId: string) => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item, onImageClick, onCaseStudyClick }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const descriptionRef = React.useRef<HTMLParagraphElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsReadMore, setNeedsReadMore] = useState(false);
  
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  
  // Check if description actually overflows 4 lines
  React.useEffect(() => {
    const checkOverflow = () => {
      if (descriptionRef.current) {
        const element = descriptionRef.current;
        const computedStyle = window.getComputedStyle(element);
        const lineHeight = parseFloat(computedStyle.lineHeight);
        const maxHeight = lineHeight * 4; // 4 lines
        
        // Temporarily remove line clamp to measure full height
        element.style.webkitLineClamp = 'unset';
        const actualHeight = element.scrollHeight;
        element.style.webkitLineClamp = '4';
        
        // Add 10px tolerance to avoid showing button for barely overflowing text
        const shouldShow = actualHeight > (maxHeight + 10);
        
        setNeedsReadMore(shouldShow);
      }
    };
    
    // Delay to ensure DOM is fully rendered
    setTimeout(checkOverflow, 100);
    window.addEventListener('resize', checkOverflow);
    
    return () => window.removeEventListener('resize', checkOverflow);
  }, [item.description, item.title]);
  
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return; // Disable on mobile
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setTilt({ x: y * 1.5, y: -x * 1.5 }); // Subtle 3D tilt
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);
  const renderMedia = () => {
    switch (item.mediaType) {
      case 'youtube':
        return (
          <div className={styles.iframeWrapper}>
            <iframe
              src={`https://www.youtube.com/embed/${item.youtubeId}`}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.iframe}
            />
          </div>
        );

      case 'video':
        return (
          <video 
            controls 
            className={styles.video}
            playsInline
            poster={item.posterImage}
          >
            <source src={item.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );

      case 'image':
        return (
          <img
            src={item.imageSrc}
            alt={item.title}
            className={styles.image}
            onClick={() => onImageClick(item.imageSrc!, item.title, item.lightboxGroup)}
            style={{ cursor: 'pointer' }}
            loading="lazy"
          />
        );

      case 'carousel':
        return (
          <ImageCarousel
            images={item.carouselImages || []}
            autoRotate={item.autoRotate}
            lightboxGroup={item.lightboxGroup}
            onImageClick={(index) => {
              if (item.carouselImages && item.carouselImages[index]) {
                onImageClick(
                  item.carouselImages[index].src,
                  item.carouselImages[index].alt,
                  item.lightboxGroup
                );
              }
            }}
          />
        );

      case 'beforeAfter':
        return (
          <div className={styles.multiImagePortfolio} onMouseMove={e => e.stopPropagation()}>
            <div className={styles.portfolioPrimaryImage}>
              <BeforeAfterSlider
                beforeImage={item.beforeImage!}
                afterImage={item.afterImage!}
                beforeAlt={`${item.title} - Before`}
                afterAlt={`${item.title} - After`}
              />
            </div>
            {item.secondaryImages && item.secondaryImages.length > 0 && (
              <div className={styles.portfolioSecondaryCarousel}>
                <div className={styles.secondaryCarouselContainer}>
                  {item.secondaryImages.map((img, index) => (
                    <div
                      key={index}
                      className={styles.secondaryCarouselItem}
                      onClick={() => onImageClick(img.src, img.alt, item.lightboxGroup)}
                    >
                      <img src={img.src} alt={img.alt} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 'multiImage':
        return (
          <ImageCarousel
            images={item.carouselImages || []}
            autoRotate={false}
            lightboxGroup={item.lightboxGroup}
            onImageClick={(index) => {
              if (item.carouselImages && item.carouselImages[index]) {
                onImageClick(
                  item.carouselImages[index].src,
                  item.carouselImages[index].alt,
                  item.lightboxGroup
                );
              }
            }}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div 
      ref={itemRef}
      className={styles.portfolioItem}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={window.innerWidth >= 768 ? {
        transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 && tilt.y === 0 ? 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
      } : undefined}
    >
      <div className={styles.portfolioMedia}>
        {renderMedia()}
      </div>
      <div className={styles.portfolioContent}>
        <div className={styles.portfolioCategory}>{item.categoryLabel}</div>
        <h3 className={styles.portfolioTitle}>{item.title}</h3>
        <div className={`${styles.portfolioDescriptionWrapper} ${isExpanded ? styles.expanded : ''}`}>
          <p ref={descriptionRef} className={styles.portfolioDescription}>{item.description}</p>
          {needsReadMore && (
            <button 
              className={styles.readMoreButton}
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
            >
              {isExpanded ? 'Show less' : 'Read more'}
              <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
            </button>
          )}
        </div>
        {item.caseStudy && (
          <button 
            className={styles.caseStudyButton}
            onClick={() => onCaseStudyClick?.(item.id)}
          >
            <i className="fas fa-file-alt"></i>
            View Full Case Study
          </button>
        )}
        <div className={styles.portfolioTags}>
          {item.tags.map((tag, index) => (
            <span 
              key={index} 
              className={styles.portfolioTag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Memoize component to prevent unnecessary re-renders in portfolio grid
export default React.memo(PortfolioItem);
