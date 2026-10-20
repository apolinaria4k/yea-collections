import styles from './index.module.css';
interface Props {
  isFree: boolean;
}

const FreeOrNot: React.FC<Props> = ({ isFree }) => {
  return <p className={styles.freeOrNot}>{isFree ? 'Для всех' : 'Для участников'}</p>;
};

export default FreeOrNot;
