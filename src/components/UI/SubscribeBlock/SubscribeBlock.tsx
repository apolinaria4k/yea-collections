import styles from './index.module.css';

const SubscribeBlock: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <a className={styles.link} href="#">
        <img src="/TelegramPurple.svg" alt="Figma" />
      </a>
      <p>
        Подпишись на <span className={styles.spec}>Python Developer</span> в Telegram
      </p>
    </div>
  );
};

export default SubscribeBlock;
