import { CSSProperties, useState } from 'react';
import { useScroll } from '../../hooks';
import { Input } from './Input';
import { Textarea } from './Textarea';
import { PhoneInput } from './PhoneInput';
import styles from './styles.module.css';

export const RequestForm = () => {
  const { elementRef, scrollProgress } = useScroll();

  const [fio, setFio] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [brief, setBrief] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ field: string }[]>([]);

  const isValidFio = () => {
    return fio.length > 3;
  };

  const isValidPhone = () => {
    return phone.length === 10;
  };

  const isValidEmail = () => {
    const reg =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return reg.test(String(email).toLowerCase());
  };

  const isValidForm = () => {
    const tempErrors = [];

    if (!isValidFio()) {
      tempErrors.push({ field: 'fio' });
    }
    if (!isValidPhone()) {
      tempErrors.push({ field: 'phone' });
    }
    if (!isValidEmail()) {
      tempErrors.push({ field: 'email' });
    }

    setErrors(tempErrors);

    return tempErrors.length === 0;
  };

  const clearForm = () => {
    setFio('');
    setPhone('');
    setEmail('');
    setBrief('');
  };

  const handleSubmit = async () => {
    try {
      if (!isValidForm()) {
        return;
      }

      setIsSubmitting(true);

      await fetch('https://api.willbeai.ru/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fio,
          phone,
          email,
          brief,
        }),
      });

      setIsSubmitted(true);

      clearForm();
    } catch (e) {
      console.log(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTitleStyles = (): CSSProperties => {
    const opacity = 0.675 + scrollProgress > 1 ? 1 : 0.675 + scrollProgress;
    const scaleCoeff = 0.7 + scrollProgress * 0.5 > 1 ? 1 : 0.7 + scrollProgress * 0.5;
    const translate = scrollProgress > 0.5 ? 0 : -50 + 100 * scrollProgress;

    return {
      opacity,
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
      transform: `scale(${scaleCoeff}) translateY(${-translate}px)`,
      willChange: 'transform, opacity',
      backfaceVisibility: 'hidden',
    };
  };

  const getStyles = (): CSSProperties => {
    const opacity = 0.5 + scrollProgress > 1 ? 1 : 0.4 + scrollProgress;
    const transform = scrollProgress > 0.5 ? 0 : 100 - 200 * scrollProgress;

    return {
      transform: `translateX(${transform}px)`,
      transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
      willChange: 'transform, opacity',
      backfaceVisibility: 'hidden',
      opacity,
    };
  };

  return (
    <div
      id="request-form"
      style={{ ...getStyles() }}
      ref={elementRef}
      className={styles.requestForm}
    >
      <p className={styles.title} style={{ ...getTitleStyles() }}>
        Оставьте заявку
      </p>
      <Input
        value={fio}
        onChange={setFio}
        label="Как к вам обращаться? *"
        placeholder="Иванов Иван Иванович"
        invalid={errors.some((error) => error.field === 'fio')}
      />
      <PhoneInput
        value={phone}
        onChange={setPhone}
        label="Телефон *"
        placeholder="+7 (XXX) XXX-XX-XX"
        invalid={errors.some((error) => error.field === 'phone')}
      />
      <Input
        value={email}
        onChange={setEmail}
        label="Почта *"
        placeholder="ivanov@mail.ru"
        invalid={errors.some((error) => error.field === 'email')}
      />
      <Textarea
        value={brief}
        onChange={setBrief}
        label="Описание вашего кейса"
        placeholder="Бриф"
      />
      {isSubmitted ? (
        <p className={styles.submittedText}>
          Заявка отправлена <span>✅</span>
        </p>
      ) : (
        <button className={styles.sendButton} onClick={handleSubmit}>
          {isSubmitting ? 'Идет отправка...' : 'Отправить'}
        </button>
      )}
    </div>
  );
};
