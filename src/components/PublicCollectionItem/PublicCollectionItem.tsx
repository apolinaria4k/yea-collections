import type { ICollection } from '../../interfaces';
import Title from '../UI/Title/Title';
import styles from './index.module.css';
import Description from '../UI/Description/Description';
import type { FC, Dispatch, SetStateAction } from 'react';

interface Props {
  collection: ICollection | undefined;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export const PublicCollectionItem: FC<Props> = ({ collection, setIsVisible }) => {
  if (!collection) return <h1>Загрузка...</h1>;
  return (
    <div className={styles.item}>
      <div className={styles.image}></div>
      <div className={styles.wrapper}>
        <Title title={collection.title} setIsVisible={setIsVisible} />
        <Description description={collection.description} />
      </div>
    </div>
  );
};
