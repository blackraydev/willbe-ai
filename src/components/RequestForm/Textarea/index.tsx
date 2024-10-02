import styles from './styles.module.css';

type TextareaProps = {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder: string;
};

export const Textarea = ({ value, onChange, label, placeholder }: TextareaProps) => {
  return (
    <div className={styles.textareaWrapper}>
      <p className={styles.label}>{label}</p>
      <textarea
        className={styles.textarea}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
