import { useScroll } from '../../hooks';
import styles from './styles.module.css';

type FeatureType = {
  title: string;
  description: string;
  icon: string;
};

const data: FeatureType[] = [
  {
    title: 'Увеличение продаж',
    description:
      'Автоматизация рутинных задач снижает необходимость в дополнительных сотрудниках, экономя ресурсы',
    icon: '⬆️',
  },
  {
    title: 'Снижение затрат',
    description:
      'AI-ассистенты помогают повысить конверсию и увеличить объем продаж, предоставляя рекомендации, предложения и скидки в нужный момент',
    icon: '⬇️',
  },
  {
    title: 'Увеличение скорости обработки',
    description:
      'AI-ассистенты мгновенно обрабатывает запросы клиентов, не теряя времени на ожидание',
    icon: '⚙️',
  },
  {
    title: 'Круглосуточная поддержка',
    description: 'AI-ассистент работает 24/7, улучшая качество сервиса в любое время суток',
    icon: '⚙️',
  },
];

const Feature = ({ item }: { item: FeatureType }) => (
  <div className={styles.featureItem}>
    <div className={styles.itemHeader}>
      <span>{item.icon}</span>
      <p>{item.title}</p>
    </div>
    <p className={styles.itemDescription}>{item.description}</p>
  </div>
);

export const Features = () => {
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

  const getRowStyles = (reverse: boolean = false) => {
    const coeffFirst = reverse ? -1 : 1;
    const coeffSecond = reverse ? 1 : -1;
    const opacity = 0.5 + scrollProgress > 1 ? 1 : 0.4 + scrollProgress;
    const transform =
      scrollProgress > 0.5 ? 0 : coeffFirst * 50 + coeffSecond * 100 * scrollProgress;

    return {
      transform: `translateX(${transform}px)`,
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
      willChange: 'transform, opacity',
      backfaceVisibility: 'hidden',
      opacity,
    };
  };

  return (
    <div id="features" className={styles.featuresWrapper}>
      <p className={styles.title} style={{ ...getTitleStyles() }}>
        Какие проблемы решает
        <br />
        AI-ассистент?
      </p>
      <div ref={elementRef} className={styles.features}>
        <div style={{ ...getRowStyles(true) }} className={styles.row}>
          {data.slice(0, 2).map((item) => (
            <Feature key={item.title} item={item} />
          ))}
        </div>
        <div style={{ ...getRowStyles() }} className={styles.row}>
          {data.slice(2).map((item) => (
            <Feature key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
