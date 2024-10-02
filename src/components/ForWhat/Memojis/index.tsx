import cn from 'classnames';
import { MemojiCarousel } from '../MemojiCarousel';
import styles from './styles.module.css';
import { useScreen } from '../../../hooks';
import { Fragment } from 'react/jsx-runtime';

const memojiesOne = [
  { src: '/img/memojies/memoji1.png', alt: 'Memoji' },
  { src: '/img/memojies/memoji2.png', alt: 'Memoji' },
  { src: '/img/memojies/memoji3.png', alt: 'Memoji' },
  { src: '/img/memojies/memoji4.png', alt: 'Memoji' },
  { src: '/img/memojies/memoji5.png', alt: 'Memoji' },
  { src: '/img/memojies/memoji6.png', alt: 'Memoji' },
  { src: '/img/memojies/memoji7.png', alt: 'Memoji' },
  { src: '/img/memojies/memoji8.png', alt: 'Memoji' },
];

const memojiesTwo = [
  { src: '/img/memojies/memoji9.png', alt: 'Memoji' },
  { src: '/img/memojies/memoji10.png', alt: 'Memoji' },
  { src: '/img/memojies/memoji11.png', alt: 'Memoji' },
  { src: '/img/memojies/memoji12.png', alt: 'Memoji' },
  { src: '/img/memojies/memoji13.png', alt: 'Memoji' },
  { src: '/img/memojies/memoji14.png', alt: 'Memoji' },
  { src: '/img/memojies/memoji15.png', alt: 'Memoji' },
  { src: '/img/memojies/memoji16.png', alt: 'Memoji' },
];

export const Memojis = () => {
  const { isMobile } = useScreen();

  return (
    <div className={styles.memojisWrapper}>
      <div className={cn(styles.blur, styles.top)} />
      <div className={styles.memojiCarousels}>
        <MemojiCarousel memojies={memojiesOne} speed={0.25} reverse />
        <MemojiCarousel memojies={memojiesTwo} speed={0.25} />
        {!isMobile && (
          <Fragment>
            <MemojiCarousel memojies={[...memojiesOne].reverse()} speed={0.25} reverse />
            <MemojiCarousel memojies={[...memojiesTwo].reverse()} speed={0.25} />
          </Fragment>
        )}
      </div>
      <div className={cn(styles.blur, styles.bottom)} />
    </div>
  );
};
