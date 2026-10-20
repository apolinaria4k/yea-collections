import Keyword from '../Keyword/Keyword';
import styles from './index.module.css';

interface Props {
  keywords: string[];
}

const Keywords: React.FC<Props> = ({ keywords }) => {
  return (
    <ul className={styles.keywordsWrapper}>
      {keywords.map((k) => (
        <Keyword key={k} keyword={k} />
      ))}
    </ul>
  );
};

export default Keywords;
