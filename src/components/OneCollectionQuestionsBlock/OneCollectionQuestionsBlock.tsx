import type { ICollection } from '../../interfaces';
import styles from './index.module.css';
import Keywords from '../UI/Keywords/Keywords';
import Specializations from '../UI/Specializations/Specializations';
import Description from '../UI/Description/Description';
import DetailsWrapper from '../UI/DetailsWrapper/DetailsWrapper';
import { useNavigate } from 'react-router-dom';

interface Props {
  collection: ICollection;
}

const OneCollectionQuestionsBlock: React.FC<Props> = ({ questions }) => {
  // const navigate = useNavigate();

  return (
    <>
      <ul className={styles.questionList}>
        {questions.map((item) => (
          <QuestionItem key={item.id} {...item} />
        ))}
      </ul>
      <Pagination />
    </>
  );
};

export default OneCollectionQuestionsBlock;
