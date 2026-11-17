import styles from './index.module.css';
import type { FC } from 'react';

interface Props {
  isVisible: boolean;
  handleClick: () => void;
}
const ButtonArrowDown: FC<Props> = ({ isVisible, handleClick }) => {
  return (
    <button
      aria-label={isVisible ? 'Скрыть ответ' : 'Раскрыть ответ'}
      onClick={handleClick}
      className={styles.buttonArrow}></button>
  );
};

export default ButtonArrowDown;
