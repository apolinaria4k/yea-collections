import { useSearchParams } from 'react-router-dom';
import styles from './index.module.css';

const MyInput: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('value') || '';

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = new URLSearchParams(searchParams);
    next.set('value', e.target.value);
    next.set('page', String(1));
    setSearchParams(next);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        value={value}
        onChange={changeValue}
        className={styles.input}
        placeholder="Введите запрос..."
      />
    </div>
  );
};

export default MyInput;
