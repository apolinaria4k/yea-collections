import type { FC } from 'react';
import styles from '../AllCollectionsAside/index.module.css';
import MyTitle from '../UI/MyTitle/MyTitle';

interface Props {
  title: string;
  questionsCount: number;
}

const CountQuestionsBlock: FC<Props> = ({ title, questionsCount }) => {
  return (
    <>
      <div>
        <MyTitle title={title} />
        <div className={styles.variants}>
          <button className={styles.button}>{questionsCount}</button>
        </div>
      </div>
    </>
  );
};

export default CountQuestionsBlock;
