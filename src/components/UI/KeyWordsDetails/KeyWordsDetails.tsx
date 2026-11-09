import MyTitle from '../MyTitle/MyTitle';
import KeyWordDetails from '../KeyWordDetails/KeyWordDetails';
import styles from './index.module.css';

interface Props {
  keywords: string[];
}

const KeyWordsDetails: React.FC<Props> = ({ keywords }) => {
  return (
    <div>
      <MyTitle title="Ключевые слова" />
      <div className={styles.keyWordsWrapper}>
        {(keywords ?? []).map((keyword, index) => (
          <KeyWordDetails key={index} title={keyword} />
        ))}
      </div>
    </div>
  );
};

export default KeyWordsDetails;
