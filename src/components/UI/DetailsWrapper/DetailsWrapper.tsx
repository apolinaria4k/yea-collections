import styles from './index.module.css';
import FreeOrNot from '../FreeOrNot/FreeOrNot';
import CountQuestions from '../CountQuestions/CountQuestions';
import type { FC } from 'react';

interface Props {
  isFree: boolean;
  questionsCount: number;
}

const DetailsWrapper: FC<Props> = ({ isFree, questionsCount }) => {
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
