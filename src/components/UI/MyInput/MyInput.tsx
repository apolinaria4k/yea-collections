import { useSearchParams } from 'react-router-dom';
import styles from './index.module.css';
import type { FC, ChangeEvent } from 'react';

const MyInput: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('value') || '';

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const next = new URLSearchParams(searchParams);
    const nextValue = e.target.value;

    if (nextValue) {
      next.set('value', nextValue);
    } else {
      next.delete('value');
    }

    next.set('page', String(1));

    setSearchParams(next, { replace: true });
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        type="search"
        value={value}
        onChange={changeValue}
        className={styles.input}
        placeholder="Введите запрос..."
        aria-label="Поиск по коллекциям"
      />
    </div>
  );
};

export default MyInput;
