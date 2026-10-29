import type { ICollection } from '../../interfaces';
import styles from './index.module.css';
import Keywords from '../UI/Keywords/Keywords';
import Specializations from '../UI/Specializations/Specializations';
import Description from '../UI/Title/Title';
import DetailsWrapper from '../UI/DetailsWrapper/DetailsWrapper';
import { useNavigate } from 'react-router-dom';

interface Props {
  collection: ICollection;
}

export const CollectionItem: React.FC<Props> = ({ collection }) => {
  const navigate = useNavigate();

  const handleClickCollectionItem = (id: number) => {
    console.log('work');

    navigate({
      pathname: `/collections/${id}`,
    });
  };
  return (
    <div className={styles.item} onClick={() => handleClickCollectionItem(Number(collection.id))}>
      <div className={styles.image}></div>
      <div className={styles.wrapper}>
        <Keywords keywords={collection.keywords} />
        <Description title={collection.title} />
        <DetailsWrapper isFree={collection.isFree} questionsCount={collection.questionsCount} />
        <Specializations specializations={collection.specializations} />
      </div>
    </div>
  );
};
