import styles from './index.module.css';
import { Link } from 'react-router-dom';

const ForMembers: React.FC = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.wrapperQuestionsList}>
          <div className={styles.wrapperTitle}>
            <h2 className={styles.title}>Вопросы</h2>
            <div className={styles.linkWrapper}>
              <Link
                // to={{ pathname: `/questions/${id}`, search: location.search }}
                className={styles.link}>
                Стать участником сообщества
              </Link>
            </div>
          </div>
          <div className={styles.wrapperMain}>
            <img className={styles.image} src="/lock.svg" alt="Иконка замка" />
            <h2 className={styles.subTitle}>Список вопросов появится у участников сообщества</h2>
          </div>
          <div className={styles.secondLinkWrapper}>
            <Link
              // to={{ pathname: `/questions/${id}`, search: location.search }}
              className={styles.link}>
              Стать участником сообщества
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForMembers;
