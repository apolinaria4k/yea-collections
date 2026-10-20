import type { ICollection } from '../../interfaces';
import styles from './index.module.css';
import Keywords from '../UI/Keywords/Keywords';
import Specializations from '../UI/Specializations/Specializations';
import Description from '../UI/Description/Description';
import DetailsWrapper from '../UI/DetailsWrapper/DetailsWrapper';

interface Props {
  collection: ICollection;
}

export const CollectionItem: React.FC<Props> = ({ collection }) => {
  return (
    <li className={styles.item}>
      <div className={styles.image}></div>
      <div className={styles.wrapper}>
        <Keywords keywords={collection.keywords} />
        <Description description={collection.description} />
        <DetailsWrapper isFree={collection.isFree} questionsCount={collection.questionsCount} />
        <Specializations specializations={collection.specializations} />
      </div>
    </li>
  );
};
