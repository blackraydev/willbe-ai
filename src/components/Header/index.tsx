import styles from './styles.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerPart}>
        <span className={styles.title}>WillBeAI</span>
      </div>
      <div className={styles.headerPart}>
        <a href="#" className={styles.tab}>
          Зачем?
        </a>
        <a href="#" className={styles.tab}>
          Преимущества
        </a>
        <a href="#" className={styles.tab}>
          Кейсы
        </a>
      </div>
      <div className={styles.headerPart}>
        <button className={styles.sendButton}>Оставить заявку</button>
      </div>
    </div>
  );
};
