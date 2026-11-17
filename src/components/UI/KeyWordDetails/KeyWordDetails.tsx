import styles from './index.module.css';
import { Link } from 'react-router-dom';
import type { FC } from 'react';

interface Props {
  title: string;
}

const KeyWordDetails: FC<Props> = ({ title }) => {
  return (
    <Link to={`/${title}`} className={styles.text}>
      #{title}
    </Link>
  );
};

export default KeyWordDetails;
