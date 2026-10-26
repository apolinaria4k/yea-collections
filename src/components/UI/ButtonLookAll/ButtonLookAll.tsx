import styles from './index.module.css';

interface Props {
  isLookAll: boolean;
  onClick: () => void;
}

const ButtonClose: React.FC<Props> = ({ isLookAll, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={styles.button}>
        {isLookAll ? 'Скрыть' : 'Посмотреть все'}
      </button>
    </div>
  );
};

export default ButtonClose;
