import styles from './styles.module.css';

export const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <p className={styles.title}>
        Автоматизируйте бизнес-процессы
        <br />с помощью AI-ассистентов
      </p>
      <p className={styles.description}>
        Повышаем конверсию на 30% и уменьшаем затраты за счет <br />
        внедрения искусственного интеллекта в бизнес
      </p>
      <button className={styles.sendButton}>Оставить заявку</button>
    </div>
  );
};
