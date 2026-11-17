import styles from './index.module.css';
import type { FC } from 'react';

interface Props {
  description: string;
}

const Description: FC<Props> = ({ description }) => {
  return <p className={styles.description}>{description}</p>;
};

export default Description;
