import styles from './index.module.css';
import type { FC } from 'react';

const SubscribeBlock: FC = () => {
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
