import type { ICollection, IQuestion, Status } from '../../interfaces';
import OneCollectionQuestionsBlock from '../OneCollectionQuestionsBlock/OneCollectionQuestionsBlock';
import { PublicCollectionItem } from '../PublicCollectionItem/PublicCollectionItem';
import Pagination from '../UI/Pagination/Pagination';
import styles from './index.module.css';

interface Props {
  collection: ICollection | undefined;
  status: Status;
  error: string | null;
  questions: IQuestion[];
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const PublicCollectionsSection: React.FC<Props> = ({
  collection,
  setIsVisible,
  status,
  error,
  questions,
}) => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <PublicCollectionItem collection={collection} setIsVisible={setIsVisible} />
        </div>
        <div className={styles.wrapperQuestionsList}>
          <div className={styles.wrapperTitle}>
            <h2 className={styles.title}>Вопросы</h2>
          </div>

          {status === 'idle' || status === 'loading' ? (
            // <Skeleton />
            <h1>Загрузка...</h1>
          ) : status === 'error' ? (
            <h2 className={styles.title}>{error}</h2>
          ) : !questions.length ? (
            <h2 className={styles.title}>Вопросы для данной коллекции скоро появятся</h2>
          ) : (
            <>
              <OneCollectionQuestionsBlock questions={questions} />
              <Pagination />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default PublicCollectionsSection;
