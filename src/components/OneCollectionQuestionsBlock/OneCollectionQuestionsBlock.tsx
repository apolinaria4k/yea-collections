import useCollections from '../../hooks/useCollections';
import QuestionItem from '../QuestionItem/QuestionItem';
import styles from './index.module.css';
import type { FC } from 'react';
const OneCollectionQuestionsBlock: FC = () => {
  const { questions } = useCollections();
  return (
    <>
      <ul className={styles.questionList}>
        {questions.map((q) => (
          <QuestionItem key={q.id} question={q} />
        ))}
      </ul>
    </>
  );
};

export default OneCollectionQuestionsBlock;
