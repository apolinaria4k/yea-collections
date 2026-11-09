import type { ICollection } from '../../interfaces';
import styles from '../AllCollectionsAside/index.module.css';
import MyTitle from '../UI/MyTitle/MyTitle';

interface Props {
  title: string;
  collection: ICollection;
}

const CountQuestionsBlock: React.FC<Props> = ({ title, collection }) => {
  return (
    <>
      <div>
        <MyTitle title={title} />
        <div className={styles.variants}>
          <button className={styles.button}>{collection.questionsCount}</button>
        </div>
      </div>
    </>
  );
};

export default CountQuestionsBlock;
