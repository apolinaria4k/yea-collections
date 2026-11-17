import type { IQuestion } from '../../interfaces';
import GuruProfile from '../GuruProfile/GuruProfile';
import ButtonClose from '../UI/ButtonClose/ButtonClose';
import Keywords from '../UI/Keywords/Keywords';
import Levels from '../UI/Levels/Levels';
import Skills from '../UI/Skills/Skills';
import styles from './index.module.css';

interface Props {
  question: IQuestion;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const OneQuestionDetailsAside: React.FC<Props> = ({ question, isVisible, setIsVisible }) => {
  return (
    <aside className={styles.aside}>
      <div className={`${styles.blockWrapper} ${styles.filters} ${isVisible ? styles.active : ''}`}>
        <div className={styles.blockInner}>
          <ButtonClose setIsVisible={setIsVisible} />
          <div className={styles.filtersWrapper}>
            <Levels complexity={question.complexity} rate={question.rate} />
            <Skills questionSkills={question.questionSkills} />
            <Keywords keywords={question.keywords} />

            <div>
              <p className={styles.author}>
                Автор: <span className={styles.authorColor}>Дмитрий Мусиенко</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.blockWrapper} ${styles.border}`}>
        <GuruProfile />
      </div>
    </aside>
  );
};

export default OneQuestionDetailsAside;
