import styles from './index.module.css';
import FreeOrNot from '../FreeOrNot/FreeOrNot';
import CountQuestions from '../CountQuestions/CountQuestions';

interface Props {
  isFree: boolean;
  questionsCount: number;
}

const DetailsWrapper: React.FC<Props> = ({ isFree, questionsCount }) => {
  return (
    <>
      <div className={styles.detailsWrapper}>
        <FreeOrNot isFree={isFree} />
        <CountQuestions questionsCount={questionsCount} />
      </div>
    </>
  );
};

export default DetailsWrapper;
