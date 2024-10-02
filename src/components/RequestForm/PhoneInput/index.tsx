import { InputHTMLAttributes } from 'react';
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask';
import cn from 'classnames';
import styles from './styles.module.css';

const mask = '+7 (999) 999-99-99';
const maskGenerator = createDefaultMaskGenerator(mask);

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder: string;
  invalid?: boolean;
};

export const PhoneInput = ({
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
      <MaskedInput
        {...props}
        maskGenerator={maskGenerator}
        className={cn(styles.input, {
          [styles.invalid]: invalid,
        })}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
