import styles from './index.module.css';

interface Props {
  isVisible: boolean;
  handleClick: () => void;
}
const ButtonArrowDown: React.FC<Props> = ({ isVisible, handleClick }) => {
  return (
    <button
      aria-label={isVisible ? 'Скрыть ответ' : 'Раскрыть ответ'}
      onClick={handleClick}
      className={styles.buttonArrow}></button>
  );
};

export default ButtonArrowDown;
