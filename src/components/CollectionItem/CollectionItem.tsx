import styles from './index.module.css';

export default function CollectionItem() {
  return (
    <li className={styles.item}>
      <div className={styles.image}></div>
      <div className={styles.wrapper}>
        <div className={styles.keywordsWrapper}>
          <div className={styles.keyword}>Frontend</div>
          <div className={styles.keyword}>Mobile</div>
          <div className={styles.keyword}>Mobile</div>
        </div>
        <p className={styles.text}>Собеседование на мидл разработчика, вилка 250-300ккккк</p>
        <div className={styles.detailsWrapper}>
          <p className={`${styles.details} ${styles.freeOrNot}`}>Для участников</p>
          <p className={`${styles.details} ${styles.questions}`}>30 вопросов</p>
        </div>
        <div className={styles.specializationWrapper}>
          <p className={styles.specialization}>Software tester</p>
          <p className={styles.specialization}>Fullstack</p>
        </div>
      </div>
    </li>
  );
}
