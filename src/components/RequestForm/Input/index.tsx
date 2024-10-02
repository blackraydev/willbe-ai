import { InputHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './styles.module.css';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder: string;
  invalid?: boolean;
};

export const Input = ({
  value,
  onChange,
  label,
  placeholder,
  invalid = false,
  ...props
}: InputProps) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.text}>
        <p className={styles.label}>{label}</p>
        {invalid && <p className={styles.error}>Заполните поле</p>}
      </div>
      <input
        {...props}
        className={cn(styles.input, {
          [styles.invalid]: invalid,
        })}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
