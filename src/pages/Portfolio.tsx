import React, { useState, useMemo } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useFilter } from '../hooks/useFilter';
import FilterButtons from '../components/common/FilterButtons';
import PortfolioItem from '../components/portfolio/PortfolioItem';
import Lightbox from '../components/portfolio/Lightbox';
import { portfolioItems, portfolioFilters } from '../data/portfolioData';
import styles from './Portfolio.module.css';

const Portfolio: React.FC = () => {
  useScrollAnimation();

  const { activeFilter, setActiveFilter, filteredItems } = useFilter(portfolioItems, 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');
  
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

  // Search filtering
  const searchedItems = useMemo(() => {
    if (!searchQuery.trim()) return filteredItems;
    
    const query = searchQuery.toLowerCase();
    return filteredItems.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }, [filteredItems, searchQuery]);

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

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className="section-title fade-in">Portfolio</h1>
        
        <div className={`${styles.portfolioIntro} fade-in`}>
          <p>
            This is some work I've done in the past to show my capabilities and what I have experience in. 
            Some of these elements date way back from my school years, some are recent. My capabilities have 
            been constantly improving.
          </p>
        </div>

        {/* Search and View Controls */}
        <div className={styles.controls}>
          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            <span className={styles.searchIcon}>🔍</span>
          </div>
          
          <div className={styles.viewToggle}>
            <button
              className={`${styles.viewButton} ${viewMode === 'masonry' ? styles.active : ''}`}
              onClick={() => setViewMode('masonry')}
              aria-label="Masonry view"
            >
              ⊞
            </button>
            <button
              className={`${styles.viewButton} ${viewMode === 'grid' ? styles.active : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              ▦
            </button>
          </div>
        </div>

        <FilterButtons
          options={portfolioFilters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {searchedItems.length === 0 ? (
          <div className={styles.noResults}>
            <p>No projects found matching your search.</p>
          </div>
        ) : (
          <div 
            className={`${styles.portfolioGrid} ${viewMode === 'masonry' ? styles.masonry : styles.grid}`}
          >
            {searchedItems.map((item) => (
              <div key={item.id}>
                <PortfolioItem
                  item={item}
                  onImageClick={openLightbox}
                />
              </div>
            ))}
          </div>
        )}
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
