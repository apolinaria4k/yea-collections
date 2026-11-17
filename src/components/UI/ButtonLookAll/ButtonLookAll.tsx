import styles from './index.module.css';
import type { FC } from 'react';

interface Props {
  isLookAll: boolean;
  onClick: () => void;
}

const ButtonLookAll: FC<Props> = ({ isLookAll, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={styles.button}>
        {isLookAll ? 'Скрыть' : 'Посмотреть все'}
      </button>
    </div>
  );
};

export default ButtonLookAll;
