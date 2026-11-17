import styles from './index.module.css';
import type { FC } from 'react';

interface Props {
  title: string;
}

const MyTitle: FC<Props> = ({ title }) => {
  return <p className={styles.title}>{title}</p>;
};

export default MyTitle;
