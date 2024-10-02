import styles from './styles.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.title}>
        <p>@ WillBe AI</p>
      </div>
      <div className={styles.socials}>
        <a href="#">Telegram</a>
        <a href="https://www.instagram.com/willbe_ai/" target="_blank">
          Instagram
        </a>
        <a href="mailto:willbeai@yandex.ru" target="_blank">
          Почта
        </a>
      </div>
    </footer>
  );
};
