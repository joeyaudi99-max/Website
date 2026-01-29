import React from 'react';
import { PortfolioItem as PortfolioItemType } from '../../data/portfolioData';
import ImageCarousel from './ImageCarousel';
import BeforeAfterSlider from './BeforeAfterSlider';
import styles from './PortfolioItem.module.css';

interface PortfolioItemProps {
  item: PortfolioItemType;
  onImageClick: (imageSrc: string, imageAlt: string, lightboxGroup?: string) => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item, onImageClick }) => {
  const renderMedia = () => {
    switch (item.mediaType) {
      case 'youtube':
        return (
          <iframe
            src={`https://www.youtube.com/embed/${item.youtubeId}`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.iframe}
          />
        );

      case 'video':
        return (
          <video controls className={styles.video}>
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
          <div className={styles.multiImagePortfolio}>
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
    <div className={`${styles.portfolioItem} fade-in`}>
      <div className={styles.portfolioMedia}>
        {renderMedia()}
      </div>
      <div className={styles.portfolioContent}>
        <div className={styles.portfolioCategory}>{item.categoryLabel}</div>
        <h3 className={styles.portfolioTitle}>{item.title}</h3>
        <p className={styles.portfolioDescription}>{item.description}</p>
        <div className={styles.portfolioTags}>
          {item.tags.map((tag, index) => (
            <span key={index} className={styles.portfolioTag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
