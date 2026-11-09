import styles from './index.module.css';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
}

const KeyWordDetails: React.FC<Props> = ({ title }) => {
  return (
    <Link to={`/${title}`} className={styles.text}>
      #{title}
    </Link>
  );
};

export default KeyWordDetails;
