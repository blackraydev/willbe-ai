import { CSSProperties } from 'react';
import cn from 'classnames';
import { useScroll } from '../../../hooks';
import styles from './styles.module.css';

type CaseProps = {
  title: string;
  description: string;
  img: string;
  reverse?: boolean;
};

export const Case = ({ title, description, img, reverse = false }: CaseProps) => {
  const { elementRef, scrollProgress } = useScroll();

  const getStyles = (): CSSProperties => {
    const opacity = 0.675 + scrollProgress > 1 ? 1 : 0.675 + scrollProgress;
    const rotateCoeff = 20 - scrollProgress * 40 <= 0 ? 0 : 20 - scrollProgress * 40;
    const scaleCoeff = 0.75 + scrollProgress * 0.5 > 1 ? 1 : 0.75 + scrollProgress * 0.5;

    return {
      transform: `perspective(1200px) scaleX(${scaleCoeff}) rotateX(${rotateCoeff}deg)`,
      transition: 'transform 0.3s linear, opacity 0.3s linear',
      willChange: 'transform, opacity',
      backfaceVisibility: 'hidden',
      opacity,
    };
  };

  return (
    <div
      ref={elementRef}
      style={{ ...getStyles() }}
      className={cn(styles.case, {
        [styles.reverse]: reverse,
      })}
    >
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <img loading="lazy" className={styles.messagesImg} src={img} />
    </div>
  );
};
