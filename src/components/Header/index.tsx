import cn from 'classnames';
import { scrollToElem } from '../../utils';
import styles from './styles.module.css';

const tabs = [
  {
    href: '#for-whom',
    title: 'Для кого?',
  },
  {
    href: '#features',
    title: 'Преимущества',
  },
  {
    href: '#cases',
    title: 'Кейсы',
  },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerPart} onClick={() => scrollToElem('#hero-section')}>
        <img className={styles.logo} src="/src/assets/logo-willbe-shadow.svg" />
        <span className={styles.title}>WillBe AI</span>
      </div>
      <div className={cn(styles.headerPart, styles.tabs)}>
        {tabs.map((tab) => (
          <a
            key={tab.href}
            href={tab.href}
            className={styles.tab}
            onClick={() => scrollToElem(tab.href)}
          >
            {tab.title}
          </a>
        ))}
      </div>
      <div className={styles.headerPart}>
        <button className={styles.sendButton} onClick={() => scrollToElem('#request-form')}>
          Оставить заявку
        </button>
      </div>
    </header>
  );
};
