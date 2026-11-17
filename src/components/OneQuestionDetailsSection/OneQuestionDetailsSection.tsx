import OneQuestionDetailsTitle from '../OneQuestionDetailsTitle/OneQuestionDetailsTitle';

import type { IQuestion } from '../../interfaces';
import { sanitizeHtml } from '../../utils/sanitizeHtml';
import NextPreviousButtons from '../NextPreviousButtons/NextPreviousButtons';
import LongAnswer from '../UI/LongAnswer/LongAnswer';
import ShortAnswer from '../UI/ShortAnswer/ShortAnswer';
import styles from './index.module.css';

interface Props {
  question: IQuestion;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const OneQuestionDetailsSection: React.FC<Props> = ({ question, setIsVisible }) => {
  return (
    <section className={styles.section}>
      <div className={styles.blockWrapper}>
        <div className={styles.svgWrapper}>
          <OneQuestionDetailsTitle
            setIsVisible={setIsVisible}
            title={question.title}
            description={question.description}
          />
        </div>
      </div>
      <div className={styles.blockWrapper}>
        <NextPreviousButtons />
      </div>
      <div className={styles.blockWrapper}>
        <ShortAnswer text={sanitizeHtml(question.shortAnswer)} />
      </div>
      <div className={styles.blockWrapper}>
        <LongAnswer text={sanitizeHtml(question.longAnswer)} />
      </div>
    </section>
  );
};

export default OneQuestionDetailsSection;
