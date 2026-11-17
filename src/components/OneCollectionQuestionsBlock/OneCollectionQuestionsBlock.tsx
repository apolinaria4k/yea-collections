import useCollections from '../../hooks/useCollections';
import QuestionItem from '../QuestionItem/QuestionItem';
import styles from './index.module.css';

const OneCollectionQuestionsBlock: React.FC = () => {
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
