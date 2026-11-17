import styles from './index.module.css';
import type { FC } from 'react';
interface Props {
  isFree: boolean;
}

const FreeOrNot: FC<Props> = ({ isFree }) => {
  return <p className={styles.freeOrNot}>{isFree ? 'Для всех' : 'Для участников'}</p>;
};

export default FreeOrNot;
