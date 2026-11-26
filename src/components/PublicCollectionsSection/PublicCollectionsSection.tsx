import useCollections from '../../hooks/useCollections';
import type { ICollection, ListError, Status } from '../../interfaces';
import OneCollectionQuestionsBlock from '../OneCollectionQuestionsBlock/OneCollectionQuestionsBlock';
import { PublicCollectionItem } from '../PublicCollectionItem/PublicCollectionItem';
import Pagination from '../UI/Pagination/Pagination';
import type { FC, Dispatch, SetStateAction } from 'react';
import styles from './index.module.css';
import OneCollectionSkeleton from '../OneCollectionSkeleton/OneCollectionSkeleton';
import ForMembers from '../ForMembers/ForMembers';
import ForAllWithoutQuestions from '../ForAllWithoutQuestions/ForAllWithoutQuestions';

interface Props {
  collection: ICollection | undefined;
  status: Status;
  error: ListError;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  collectionId: number;
  page: number;
}

const PublicCollectionsSection: FC<Props> = ({
  collection,
  setIsVisible,
  status,
  error,
  collectionId,
  page,
}) => {
  const { questionsPage } = useCollections();
  const isCurrent =
    questionsPage !== null &&
    questionsPage.collectionId === collectionId &&
    questionsPage.page === page;

  const questions = isCurrent ? questionsPage!.data : [];

  let content;

  if (status === 'error') {
    content = <h2 className={styles.title}>{error}</h2>;
  } else if (status === 'idle' || status === 'loading' || !isCurrent) {
    content = <OneCollectionSkeleton />;
  } else if (!collection) {
    content = <OneCollectionSkeleton />;
  } else if (!collection.isFree) {
    content = <ForMembers />;
  } else if (!questions.length) {
    content = <ForAllWithoutQuestions />;
  } else {
    content = (
      <>
        <OneCollectionQuestionsBlock questions={questions} />
        <Pagination totalPages={questionsPage!.totalPages} page={page} />
      </>
    );
  }

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

          {content}
        </div>
      </section>
    </>
  );
};

export default PublicCollectionsSection;
