import { useEffect, useState } from 'react';

export const useMouseHalo = () => {
  const [haloPosition, setHaloPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if device has coarse pointer (touch device)
    const checkIfMobile = () => {
      const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(hasCoarsePointer || isTouchDevice);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    if (isMobile) {
      return () => window.removeEventListener('resize', checkIfMobile);
    }

    const handleMouseMove = (e: MouseEvent) => {
      setHaloPosition({ x: e.clientX, y: e.clientY });
      setIsActive(true);
    };

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [isMobile]);

  return { haloPosition, isActive: isActive && !isMobile };
};
