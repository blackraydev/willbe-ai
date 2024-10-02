import { useEffect, useRef, useState } from 'react';

export const useScroll = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const elementTop = elementRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const progress = Math.min(1, Math.max(0, 1 - elementTop / windowHeight));

        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    elementRef,
    scrollProgress,
  };
};
