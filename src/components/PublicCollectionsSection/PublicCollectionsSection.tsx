import type { ICollection } from '../../interfaces';
import { PublicCollectionItem } from '../PublicCollectionItem/PublicCollectionItem';
import styles from './index.module.css';

interface Props {
  collection: ICollection | undefined;
  // status: Status;
  // error: string | null;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const PublicCollectionsSection: React.FC<Props> = ({ collection, setIsVisible }) => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <PublicCollectionItem collection={collection} setIsVisible={setIsVisible} />
        </div>

        {/* {status === 'idle' || status === 'loading' ? (
          // <Skeleton />
          <h1>Загрузка...</h1>
        ) : status === 'error' ? (
          <h2 className={styles.title}>{error}</h2>
        ) : !collections.length ? (
          <h2 className={styles.title}>Вопросов с заданными параметрами не найдено</h2>
        ) : (
          <>
            <div className={styles.questionList}>
              {collections.map((c) => (
                <CollectionItem key={c.id} collection={c} />
              ))}
            </div>
            <Pagination />
          </>
        )} */}
      </section>
    </>
  );
};

export default PublicCollectionsSection;
