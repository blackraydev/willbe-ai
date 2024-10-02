import { useScroll } from '../../hooks';
import { Case } from './Case';
import styles from './styles.module.css';

const casesData = [
  {
    title: 'Продажа услуг',
    description:
      'AI-ассистент для компании по продаже техники помог увеличить онлайн продажи на 30%, обработав запросы клиентов мгновенно',
    img: '/src/assets/messages.png',
  },
  {
    title: 'Бронирование',
    description:
      ' AI-ассистент для ресторана автоматизировал бронирование столиков, снижая нагрузку на персонал',
    img: '/src/assets/messages.png',
    reverse: true,
  },
  {
    title: 'Сервисная поддержка',
    description:
      'AI-ассистент в службе поддержки решает типовые запросы пользователей, освобождая сотрудников для более сложных задач',
    img: '/src/assets/messages.png',
  },
];

export const Cases = () => {
  const { elementRef, scrollProgress } = useScroll();

  const getTitleStyles = () => {
    const opacity = 0.675 + scrollProgress > 1 ? 1 : 0.675 + scrollProgress;
    const scaleCoeff = 0.7 + scrollProgress * 0.5 > 1 ? 1 : 0.7 + scrollProgress * 0.5;
    const translate = scrollProgress > 0.5 ? 0 : -50 + 100 * scrollProgress;

    return {
      opacity,
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
      transform: `scale(${scaleCoeff}) translateY(${-translate}px)`,
      willChange: 'transform, opacity',
      backfaceVisibility: 'hidden',
    };
  };

  return (
    <div id="cases" ref={elementRef} className={styles.cases}>
      <p className={styles.casesTitle} style={{ ...getTitleStyles() }}>
        Кейсы
      </p>
      {casesData.map((data) => (
        <Case key={data.title} {...data} />
      ))}
    </div>
  );
};
