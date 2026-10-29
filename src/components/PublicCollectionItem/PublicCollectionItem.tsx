import type { ICollection } from '../../interfaces';
import Title from '../UI/Title/Title';
import styles from './index.module.css';
import Description from '../UI/Description/Description';

interface Props {
  collection: ICollection | undefined;
}

export const PublicCollectionItem: React.FC<Props> = ({ collection }) => {
  if (!collection) return <h1>Загрузка...</h1>;
  return (
    <div className={styles.item}>
      <div className={styles.image}></div>
      <div className={styles.wrapper}>
        <Title title={collection.title} />
        <Description description={collection.description} />
      </div>
    </div>
  );
};
