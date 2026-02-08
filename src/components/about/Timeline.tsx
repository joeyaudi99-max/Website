import React, { useState, useEffect, useRef } from 'react';
import { timelineItems } from '../../data/timelineData';
import styles from './Timeline.module.css';

const Timeline: React.FC = () => {
  return (
    <div className={styles.timeline}>
      {timelineItems.map((item, index) => (
        <TimelineItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
};

const TimelineItemComponent: React.FC<{ item: typeof timelineItems[0] }> = ({ item }) => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsReadMore, setNeedsReadMore] = useState(false);

  useEffect(() => {
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
  }, [item.description]);

  return (
    <div className={`${styles.timelineItem} fade-in`}>
      <div className={styles.timelineDot}></div>
      <div className={styles.timelineContent}>
        <h3>{item.title}</h3>
        <p className={styles.timelineCompany}>
          {item.company}
          {item.location && ` | ${item.period} | ${item.location}`}
          {!item.location && ` | ${item.period}`}
        </p>
        <div className={`${styles.descriptionWrapper} ${isExpanded ? styles.expanded : ''}`}>
          <p ref={descriptionRef}>{item.description}</p>
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
        {item.skills && item.skills.length > 0 && (
          <div className={styles.skillTags}>
            {item.skills.map((skill, idx) => (
              <span key={idx} className={styles.skillTag}>{skill}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Memoize to optimize About page performance
export default React.memo(Timeline);
