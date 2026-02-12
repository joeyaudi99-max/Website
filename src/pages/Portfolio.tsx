import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';
import PortfolioItem from '../components/portfolio/PortfolioItem';
import Lightbox from '../components/portfolio/Lightbox';
import { portfolioItems } from '../data/portfolioData';
import styles from './Portfolio.module.css';

const Portfolio: React.FC = () => {
  useScrollAnimation();
  
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageSrc: string | null;
    imageAlt: string;
    lightboxGroup: string | null;
    currentIndex: number;
  }>({
    isOpen: false,
    imageSrc: null,
    imageAlt: '',
    lightboxGroup: null,
    currentIndex: 0
  });

  const openLightbox = (imageSrc: string, imageAlt: string, lightboxGroup?: string) => {
    const groupImages = lightboxGroup
      ? portfolioItems
          .filter(item => item.lightboxGroup === lightboxGroup)
          .flatMap(item => {
            if (item.carouselImages) return item.carouselImages;
            if (item.imageSrc) return [{ src: item.imageSrc, alt: item.title }];
            if (item.secondaryImages) return item.secondaryImages;
            return [];
          })
      : [{ src: imageSrc, alt: imageAlt }];

    const currentIndex = groupImages.findIndex(img => img.src === imageSrc);

    setLightboxState({
      isOpen: true,
      imageSrc,
      imageAlt,
      lightboxGroup: lightboxGroup || null,
      currentIndex: currentIndex >= 0 ? currentIndex : 0
    });
  };

  const closeLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  const navigateLightbox = (direction: number) => {
    if (!lightboxState.lightboxGroup) return;

    const groupImages = portfolioItems
      .filter(item => item.lightboxGroup === lightboxState.lightboxGroup)
      .flatMap(item => {
        if (item.carouselImages) return item.carouselImages;
        if (item.imageSrc) return [{ src: item.imageSrc, alt: item.title }];
        if (item.secondaryImages) return item.secondaryImages;
        return [];
      });

    let newIndex = lightboxState.currentIndex + direction;
    if (newIndex < 0) newIndex = groupImages.length - 1;
    if (newIndex >= groupImages.length) newIndex = 0;

    setLightboxState({
      ...lightboxState,
      imageSrc: groupImages[newIndex].src,
      imageAlt: groupImages[newIndex].alt,
      currentIndex: newIndex
    });
  };

  const groupImages = lightboxState.lightboxGroup
    ? portfolioItems
        .filter(item => item.lightboxGroup === lightboxState.lightboxGroup)
        .flatMap(item => {
          if (item.carouselImages) return item.carouselImages;
          if (item.imageSrc) return [{ src: item.imageSrc, alt: item.title }];
          if (item.secondaryImages) return item.secondaryImages;
          return [];
        })
    : [];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Joey Audi Portfolio",
    "description": "Portfolio showcasing video production, 3D animation, cinematography, event coordination, and audiovisual projects.",
    "author": {
      "@type": "Person",
      "name": "Joey Audi",
      "jobTitle": "Audiovisual Technician & Event Coordinator",
      "url": "https://joeyaudi.com"
    },
    "url": "https://joeyaudi.com/portfolio"
  };

  return (
    <div className={styles.page}>
      <SEO 
        title="Portfolio"
        description="Explore Joey Audi's portfolio of video production, 3D animation, cinematography, and event coordination projects. Professional work and creative projects across multiple disciplines."
        image="/Media/PostApocalyptic_Render.jpg"
        structuredData={structuredData}
      />
      <div className="container">
        <h1 className="section-title fade-in">Portfolio</h1>
        
        <div className={`${styles.portfolioIntro} fade-in`}>
          <p>
            Here's work I've done over the years. From professional projects to academic assignments that 
            shaped my skills in audiovisual production, event branding, and 3D rendering.
          </p>
        </div>

        <div 
          className={styles.portfolioGrid}
          style={window.innerWidth < 768 ? { gridTemplateColumns: '1fr' } : undefined}
        >
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id}
              style={{
                animation: `fadeInUp 0.6s ease ${index * 0.05}s both`,
                animationIterationCount: 1,
                maxWidth: '100%',
                overflow: 'hidden'
              }}
            >
              <PortfolioItem
                item={item}
                onImageClick={openLightbox}
              />
            </div>
          ))}
        </div>

        {/* Instagram Feed Section */}
        <div className={styles.instagramSection}>
          <h2 className="section-title fade-in">Follow My Work on Instagram</h2>
          <div className={styles.instagramEmbed}>
            <iframe
              src="https://www.instagram.com/joeyaudi2/embed/"
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              title="Instagram Feed"
            ></iframe>
          </div>
          <div className={styles.instagramLink}>
            <a 
              href="https://www.instagram.com/joeyaudi2/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.instagramButton}
            >
              View Full Instagram Profile →
            </a>
          </div>
        </div>
      </div>

      <Lightbox
        isOpen={lightboxState.isOpen}
        imageSrc={lightboxState.imageSrc}
        imageAlt={lightboxState.imageAlt}
        onClose={closeLightbox}
        onNext={() => navigateLightbox(1)}
        onPrev={() => navigateLightbox(-1)}
        currentIndex={lightboxState.currentIndex}
        totalImages={groupImages.length}
      />
    </div>
  );
};

export default Portfolio;
