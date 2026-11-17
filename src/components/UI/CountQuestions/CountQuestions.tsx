import styles from './index.module.css';
import type { FC } from 'react';
interface Props {
  questionsCount: number;
}

const CountQuestions: FC<Props> = ({ questionsCount }) => {
  return (
    <>
      <p className={`${styles.details} ${styles.questions}`}>
        {questionsCount === 1 && `${questionsCount} вопрос`}
        {questionsCount > 1 && questionsCount < 5 && `${questionsCount} вопроса`}
        {(questionsCount === 0 || questionsCount >= 5) && `${questionsCount} вопросов`}
      </p>
    </>
  );
};

export default CountQuestions;
