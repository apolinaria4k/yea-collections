import styles from './index.module.css';

const ForAllWithoutQuestions: React.FC = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapperQuestionsList}>
          <div className={styles.wrapperTitle}>
            <h2 className={styles.title}>Вопросы</h2>
          </div>
          <div className={styles.wrapperMain}>
            <img className={styles.image} src="/clock.svg" alt="Иконка часов" />
            <h2 className={styles.subTitle}>Вопросы для данной коллекции скоро появятся</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForAllWithoutQuestions;
