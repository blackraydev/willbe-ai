import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import { Memojis } from './Memojis';
import { ForWhatText } from './ForWhatText';

export const ForWhat = () => {
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

  const getStyles = () => {
    const opacity = 0.675 + scrollProgress > 1 ? 1 : 0.675 + scrollProgress;
    const rotateCoeff = 20 - scrollProgress * 40 <= 0 ? 0 : 20 - scrollProgress * 40;
    const scaleCoeff = 0.75 + scrollProgress * 0.5 > 1 ? 1 : 0.75 + scrollProgress * 0.5;

    return {
      transform: `perspective(1200px) scaleX(${scaleCoeff}) rotateX(${rotateCoeff}deg)`,
      transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
      opacity,
    };
  };

  return (
    <div style={{ ...getStyles() }} ref={elementRef} className={styles.forWhat}>
      <Memojis />
      <ForWhatText />
    </div>
  );
};
