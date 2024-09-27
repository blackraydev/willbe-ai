import styles from './styles.module.css';
import { useEffect, useRef } from 'react';

type MemojiCarouselProps = {
  speed: number;
  reverse?: boolean;
};

export const MemojiCarousel = ({ speed = 0.25, reverse = false }: MemojiCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const content = carouselRef.current;

    if (!content) return;

    let position = 0; // Начальная позиция
    const items = content.children; // Получаем элементы карусели
    const itemHeight = (items[0] as HTMLElement).clientHeight + 25; // Высота первого элемента с учетом gap

    // Функция для перемещения карусели
    const moveCarousel = () => {
      // Сдвигаем позицию на основании скорости
      position += reverse ? speed : -speed;

      // Применяем трансформацию
      content.style.transform = `translateY(${position}px)`;

      // Если первый элемент выходит за пределы видимости
      if (position <= -itemHeight) {
        // Перемещаем первый элемент в конец
        content.appendChild(items[0]);
        position = 0; // Сбрасываем позицию
      }

      // Если последний элемент выходит за пределы видимости
      if (position >= itemHeight + 25) {
        // Перемещаем последний элемент в начало
        content.prepend(items[items.length - 1]);
        position = -itemHeight; // Сбрасываем позицию
      }

      // Запрашиваем следующий кадр анимации
      requestRef.current = requestAnimationFrame(moveCarousel);
    };

    // Запускаем анимацию
    requestRef.current = requestAnimationFrame(moveCarousel);

    // Очистка
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [speed, reverse]);

  return (
    <div ref={carouselRef} className={styles.memojiCarousel}>
      <div className={styles.memojiItems}>
        <img className={styles.memoji} src="/src/assets/memoji.png" alt="Memoji 1" />
        <img className={styles.memoji} src="/src/assets/memoji.png" alt="Memoji 1" />
        <img className={styles.memoji} src="/src/assets/memoji.png" alt="Memoji 1" />
        <img className={styles.memoji} src="/src/assets/memoji.png" alt="Memoji 1" />
      </div>
      <div className={styles.memojiItems}>
        <img className={styles.memoji} src="/src/assets/memoji.png" alt="Memoji 1" />
        <img className={styles.memoji} src="/src/assets/memoji.png" alt="Memoji 1" />
        <img className={styles.memoji} src="/src/assets/memoji.png" alt="Memoji 1" />
        <img className={styles.memoji} src="/src/assets/memoji.png" alt="Memoji 1" />
      </div>
    </div>
  );
};
