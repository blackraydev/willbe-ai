import cn from 'classnames';
import styles from './styles.module.css';
import { useScroll } from '../../../hooks';

type CaseProps = {
  title: string;
  description: string;
  img: string;
  reverse?: boolean;
};

export const Case = ({ title, description, img, reverse = false }: CaseProps) => {
  const { elementRef, scrollProgress } = useScroll();

  const getStyles = () => {
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
      <img className={styles.messagesImg} src={img} />
    </div>
  );
};
