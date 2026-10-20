import type { ICollection } from '../../interfaces';
import styles from './index.module.css';
import Keywords from '../UI/Keywords/Keywords';

interface Props {
  collection: ICollection;
}

export const CollectionItem: React.FC<Props> = ({ collection }) => {
  return (
    <li className={styles.item}>
      <div className={styles.image}></div>
      <div className={styles.wrapper}>
        <Keywords keywords={collection.keywords} />
        <p className={styles.text}>{collection.description}</p>
        <div className={styles.detailsWrapper}>
          <p className={`${styles.details} ${styles.freeOrNot}`}>
            {collection.isFree ? 'Для всех' : 'Для участников'}
          </p>
          <p className={`${styles.details} ${styles.questions}`}>
            {collection.questionsCount === 1 && 'вопрос'}
            {collection.questionsCount > 1 && collection.questionsCount < 5 && 'вопроса'}
            {collection.questionsCount >= 5 && 'вопросов'}
          </p>
        </div>
        <div className={styles.specializationWrapper}>
          <p className={styles.specialization}>Software tester</p>
          <p className={styles.specialization}>Fullstack</p>
        </div>
      </div>
    </li>
  );
};
