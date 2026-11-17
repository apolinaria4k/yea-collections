import Keyword from '../Keyword/Keyword';
import styles from './index.module.css';
import type { FC } from 'react';

interface Props {
  keywords: string[];
}

const Keywords: FC<Props> = ({ keywords }) => {
  return (
    <ul className={styles.keywordsWrapper}>
      {keywords.map((k) => (
        <Keyword key={k} keyword={k} />
      ))}
    </ul>
  );
};

export default Keywords;
