import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe elements on mount and whenever DOM changes
    const observeElements = () => {
      const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
      elements.forEach(el => {
        // Remove visible class first to allow re-animation
        el.classList.remove('visible');
        observer.observe(el);
      });
    };

    // Initial observation
    observeElements();

    // Create a mutation observer to watch for DOM changes
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};
