import useCollections from '../../hooks/useCollections';
import type { ICollection, ListError, Status } from '../../interfaces';
import OneCollectionQuestionsBlock from '../OneCollectionQuestionsBlock/OneCollectionQuestionsBlock';
import { PublicCollectionItem } from '../PublicCollectionItem/PublicCollectionItem';
import Pagination from '../UI/Pagination/Pagination';
import type { FC, Dispatch, SetStateAction } from 'react';
import styles from './index.module.css';
import OneCollectionSkeleton from '../OneCollectionSkeleton/OneCollectionSkeleton';

interface Props {
  collection: ICollection | undefined;
  status: Status;
  error: ListError;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const PublicCollectionsSection: FC<Props> = ({ collection, setIsVisible, status, error }) => {
  const { questions } = useCollections();
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
            <OneCollectionSkeleton />
          ) : status === 'error' ? (
            <h2 className={styles.title}>{error}</h2>
          ) : !questions.length ? (
            <h2 className={styles.title}>Вопросы для данной коллекции скоро появятся</h2>
          ) : (
            <>
              <OneCollectionQuestionsBlock />
              <Pagination />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default PublicCollectionsSection;
