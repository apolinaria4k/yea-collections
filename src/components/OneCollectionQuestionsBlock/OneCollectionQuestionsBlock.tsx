import type { IQuestion } from '../../interfaces';
import QuestionItem from '../QuestionItem/QuestionItem';
import styles from './index.module.css';

interface Props {
  questions: IQuestion[];
}

const OneCollectionQuestionsBlock: React.FC<Props> = ({ questions }) => {
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
