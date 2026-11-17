import styles from './index.module.css';
import type { FC, Dispatch, SetStateAction } from 'react';

interface Props {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const ButtonClose: FC<Props> = ({ setIsVisible }) => {
  return (
    <div className={styles.wrapper}>
      <button
        aria-label="Закрыть фильтры"
        className={styles.asideCloseButton}
        onClick={() => setIsVisible(false)}></button>
    </div>
  );
};

export default ButtonClose;
