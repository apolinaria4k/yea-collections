import SocialsGuru from '../UI/SocialsGuru/SocialsGuru';
import styles from './index.module.css';

export default function GuruProfile() {
  return (
    <div className={styles.guruWrapper}>
      <div className={styles.guruProfile}>
        <div>
          <img src="/profilePhoto.png" alt="" />
        </div>
        <div className={styles.text}>
          <p className={styles.name}>Руслан Куянец</p>
          <p className={styles.afterName}>Python Guru</p>
        </div>
      </div>
      <div>
        <p>Guru – это эксперты YeaHub, которые помогают развивать комьюнити.</p>
      </div>
      <SocialsGuru></SocialsGuru>
    </div>
  );
}
