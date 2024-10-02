import cn from 'classnames';
import styles from './styles.module.css';
import { useEffect, useRef } from 'react';
import { useScreen } from '../../../hooks';

const GAP = 25;

type MemojiType = {
  src: string;
  alt: string;
};

type MemojiCarouselProps = {
  speed: number;
  memojies: MemojiType[];
  reverse?: boolean;
};

export const MemojiCarousel = ({
  speed = 0.25,
  memojies,
  reverse = false,
}: MemojiCarouselProps) => {
  const { isMobile } = useScreen();

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const content = carouselRef.current;

    if (!content) return;

    let position = 0;

    const itemProp = isMobile ? 'clientWidth' : 'clientHeight';
    const items = content.children;
    const itemSize = (items[0] as HTMLElement)[itemProp] + GAP;

    // Функция для перемещения карусели
    const moveCarousel = () => {
      position += reverse ? speed : -speed;

      content.style.transform = isMobile
        ? `translateX(${position}px)`
        : `translateY(${position}px)`;

      // Если первый элемент выходит за пределы видимости
      if (position <= -itemSize) {
        // Перемещаем первый элемент в конец
        content.appendChild(items[0]);
        position = 0;
      }

      // Если последний элемент выходит за пределы видимости
      if (position >= itemSize) {
        // Перемещаем последний элемент в начало
        content.prepend(items[items.length - 1]);
        position = 0;
      }

      requestRef.current = requestAnimationFrame(moveCarousel);
    };

    requestRef.current = requestAnimationFrame(moveCarousel);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [speed, reverse]);

  return (
    <div
      ref={carouselRef}
      className={cn(styles.memojiCarousel, {
        [styles.reverse]: reverse,
      })}
    >
      <div className={styles.memojiItems}>
        {memojies.slice(0, 4).map(({ src, alt }) => (
          <img loading="lazy" className={styles.memoji} key={src} src={src} alt={alt} />
        ))}
      </div>
      <div className={styles.memojiItems}>
        {memojies.slice(4).map(({ src, alt }) => (
          <img loading="lazy" className={styles.memoji} key={src} src={src} alt={alt} />
        ))}
      </div>
    </div>
  );
};
