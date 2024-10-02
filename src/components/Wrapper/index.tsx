import styles from './styles.module.css';

type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div id="wrapper" className={styles.wrapper}>
      {children}
    </div>
  );
};
