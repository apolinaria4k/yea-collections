import styles from './index.module.css';
import type { FC } from 'react';

interface Props {
  count?: number;
}

const OneCollectionSkeleton: FC<Props> = ({ count = 10 }) => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.itemCollection}></div>
        </div>
        <div className={styles.wrapperQuestionsList}>
          <ul className={styles.questionList}>
            {[...Array(count)].map((_, index) => (
              <li className={styles.item} key={index}></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default OneCollectionSkeleton;
