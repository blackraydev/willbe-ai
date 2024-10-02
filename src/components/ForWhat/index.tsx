import { CSSProperties } from 'react';
import { useScroll } from '../../hooks';
import { Memojis } from './Memojis';
import { ForWhatText } from './ForWhatText';
import styles from './styles.module.css';

export const ForWhat = () => {
  const { elementRef, scrollProgress } = useScroll();

  const getStyles = (): CSSProperties => {
    const opacity = 0.5 + scrollProgress > 1 ? 1 : 0.4 + scrollProgress;
    const transform = scrollProgress > 0.5 ? 0 : 100 - 200 * scrollProgress;

    return {
      transform: `translateX(${transform}px)`,
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
      willChange: 'transform, opacity',
      backfaceVisibility: 'hidden',
      opacity,
    };
  };

  return (
    <div id="for-whom" className={styles.forWhatWrapper}>
      <div style={{ ...getStyles() }} ref={elementRef} className={styles.forWhat}>
        <Memojis />
        <ForWhatText />
      </div>
    </div>
  );
};
