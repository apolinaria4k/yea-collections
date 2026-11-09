import { useState } from 'react';
import type { IQuestion } from '../../interfaces';
import ButtonArrowDown from '../UI/ButtonArrowDown/ButtonArrowDown';
import styles from './index.module.css';
import AnswerInItem from '../AnswerInItem/AnswerInItem';

interface Props {
  question: IQuestion;
}

const QuestionItem: React.FC<Props> = ({ question }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <li className={styles.item}>
      <div className={styles.wrapper}>
        <p className={styles.text}>{question.title}</p>
        <ButtonArrowDown isVisible={isVisible} handleClick={handleClick} />
      </div>
      {isVisible && (
        <AnswerInItem
          id={question.id}
          rate={question.rate}
          complexity={question.complexity}
          shortAnswer={question.shortAnswer}
        />
      )}
    </li>
  );
};

export default QuestionItem;
