import styles from './index.module.css';

export default function Socials() {
  return (
    <div className={styles.linkList}>
      <a className={styles.link} href="#">
        <img src="/TelegramPurple.svg" alt="Figma" />
      </a>
      <a className={styles.link} href="#">
        <img src="/YoutubePurple.svg" alt="Telegram" />
      </a>
      <a className={styles.link} href="#">
        <img src="/ProfilePurple.svg" alt="YouTube" />
      </a>
    </div>
  );
}
