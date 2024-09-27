import styles from './styles.module.css';

export const ForWhatText = () => {
  return (
    <div className={styles.forWhatText}>
      <p className={styles.title}>AI-ассистент нужен вам, если вы</p>

      <p className={styles.point}>
        <span className={styles.interpunct}>•</span> Владелец малого или среднего бизнеса
      </p>
      <p className={styles.point}>
        <span className={styles.interpunct}>•</span> Ведёте переписку с клиентами в мессенджерах
      </p>
      <p className={styles.point}>
        <span className={styles.interpunct}>•</span> Хотите качественно и быстро обрабатывать заявки
      </p>
      <p className={styles.point}>
        <span className={styles.interpunct}>•</span> Желаете повысить свой доход
      </p>
    </div>
  );
};
