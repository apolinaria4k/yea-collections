import { Link } from 'react-router-dom';
import styles from './index.module.css';
import Socials from '../UI/Socials/Socials';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapperFooter}>
        <Link to="/" className={styles.logo}>
          <img src="/logoWhite.svg" alt="Logo" />
        </Link>
        <p className={styles.slogan}>Выбери, каким будет IT завтра, вместе с нами</p>
        <p className={styles.textInfo}>
          YeaHub — это полностью открытый проект, призванный объединить и улучшить IT-сферу. Наш
          исходный код доступен для просмотра на GitHub. Дизайн проекта также открыт для
          ознакомления в Figma.
        </p>
        <div className={styles.additionalInfo}>
          <div className={styles.copyright}>
            <p className={styles.copyrightText}>© 2024 YeaHub</p>
            <Link to="/" className={styles.copyrightLink}>
              Документы
            </Link>
          </div>
          <div className={styles.socials}>
            <p>Ищите нас и в других соцсетях @yeahub_it</p>
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
}
