import { scrollToElem } from '../../utils';
import styles from './styles.module.css';

export const HeroSection = () => {
  return (
    <div id="hero-section" className={styles.heroSection}>
      <p className={styles.title}>
        Автоматизируйте бизнес-процессы
        <br />с помощью AI&#8209;ассистентов
      </p>
      <p className={styles.description}>
        Повышаем конверсию на 30% и уменьшаем затраты за счет <br />
        внедрения искусственного интеллекта&nbsp;в бизнес
      </p>
      <button className={styles.sendButton} onClick={() => scrollToElem('#request-form')}>
        Оставить заявку
      </button>
    </div>
  );
};
