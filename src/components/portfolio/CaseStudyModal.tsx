import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CaseStudyModal.module.css';

export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  challenge: string;
  solution: string;
  impact: string[];
  tools: string[];
  images: string[];
  thesisLink?: string;
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudyData | null;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose, caseStudy }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = caseStudy?.images ?? [];

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => setLightboxIndex(i => (i !== null ? Math.max(i - 1, 0) : null)), []);
  const nextImage = useCallback(() => setLightboxIndex(i => (i !== null ? Math.min(i + 1, images.length - 1) : null)), [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, nextImage, prevImage, closeLightbox]);

  // Reset lightbox when modal closes
  useEffect(() => {
    if (!isOpen) setLightboxIndex(null);
  }, [isOpen]);

  if (!caseStudy) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
                <i className="fas fa-times"></i>
              </button>

              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>{caseStudy.title}</h2>
                <p className={styles.modalSubtitle}>{caseStudy.subtitle}</p>
              </div>

              {/* Images Gallery */}
              {images.length > 0 && (
                <div className={styles.imagesGallery}>
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${caseStudy.title} - ${index + 1}`}
                      className={styles.galleryImage}
                      loading="lazy"
                      onClick={() => setLightboxIndex(index)}
                    />
                  ))}
                </div>
              )}

              <div className={styles.modalBody}>
                <div className={styles.section}>
                  <h3>Role</h3>
                  <p>{caseStudy.role}</p>
                </div>

                <div className={styles.section}>
                  <h3>Challenge</h3>
                  <p>{caseStudy.challenge}</p>
                </div>

                <div className={styles.section}>
                  <h3>Solution</h3>
                  <p>{caseStudy.solution}</p>
                </div>

                <div className={styles.section}>
                  <h3>Impact & Results</h3>
                  <ul className={styles.impactList}>
                    {caseStudy.impact.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.section}>
                  <h3>Tools & Technologies</h3>
                  <div className={styles.toolsList}>
                    {caseStudy.tools.map((tool, index) => (
                      <span key={index} className={styles.toolBadge}>{tool}</span>
                    ))}
                  </div>
                </div>

                {caseStudy.thesisLink && (
                  <div className={styles.section}>
                    <a
                      href={caseStudy.thesisLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.thesisLink}
                    >
                      <i className="fas fa-book-open"></i>
                      Read Full Thesis →
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox — renders above the case study modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className={styles.lightboxOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            <motion.img
              key={lightboxIndex}
              src={images[lightboxIndex]}
              alt={`${caseStudy.title} - ${lightboxIndex + 1}`}
              className={styles.lightboxImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              draggable={false}
            />

            {/* Close button */}
            <button
              className={styles.lightboxClose}
              onClick={closeLightbox}
              aria-label="Close image"
            >
              <i className="fas fa-times"></i>
            </button>

            {/* Prev arrow */}
            {lightboxIndex > 0 && (
              <button
                className={`${styles.lightboxArrow} ${styles.lightboxArrowLeft}`}
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                aria-label="Previous image"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
            )}

            {/* Next arrow */}
            {lightboxIndex < images.length - 1 && (
              <button
                className={`${styles.lightboxArrow} ${styles.lightboxArrowRight}`}
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                aria-label="Next image"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            )}

            {/* Counter */}
            {images.length > 1 && (
              <div className={styles.lightboxCounter}>
                {lightboxIndex + 1} / {images.length}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CaseStudyModal;
