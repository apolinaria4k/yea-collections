import styles from './index.module.css';
import type { FC } from 'react';
interface Props {
  keyword: string;
}

const Keyword: FC<Props> = ({ keyword }) => {
  return <li className={styles.keyword}>{keyword}</li>;
};

export default Keyword;
