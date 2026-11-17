import type { FC } from 'react';
import styles from './index.module.css';

const OneQuestionSkeleton: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.blockWrapper}>
        <div className={`${styles.first} ${styles.same}`}></div>
      </div>
      <div className={styles.blockWrapper}>
        <div className={`${styles.second} ${styles.same}`}></div>
      </div>
      <div className={styles.blockWrapper}>
        <div className={`${styles.third} ${styles.same}`}></div>
      </div>
      <div className={styles.blockWrapper}>
        <div className={`${styles.fourth} ${styles.same}`}></div>
      </div>
    </section>
  );
};

export default OneQuestionSkeleton;
