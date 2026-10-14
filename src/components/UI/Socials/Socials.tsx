import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default function Socials() {
  return (
    <div className={styles.linkList}>
      <Link to="/" className={styles.link}>
        <img src="/Figma.svg" alt="Figma" />
      </Link>
      <Link to="/" className={styles.link}>
        <img src="/tg.svg" alt="Telegram" />
      </Link>
      <Link to="/" className={styles.link}>
        <img src="/youtube.svg" alt="YouTube" />
      </Link>
      <Link to="/" className={styles.link}>
        <img src="/tiktok.svg" alt="TikTok" />
      </Link>
      <Link to="/" className={styles.link}>
        <img src="/github.svg" alt="GitHub" />
      </Link>
    </div>
  );
}
