import { MemojiCarousel } from '../MemojiCarousel';
import styles from './styles.module.css';

export const Memojis = () => {
  return (
    <div className={styles.memojisWrapper}>
      <MemojiCarousel speed={1} reverse />
      <MemojiCarousel speed={1} />
      <MemojiCarousel speed={1} reverse />
      <MemojiCarousel speed={1} />
    </div>
  );
};
