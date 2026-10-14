import styles from './index.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../UI/Navigation/Navigation';

export default function Header() {
  const [isPrepareMenuVisible, setIsPrepareMenuVisible] = useState<boolean>(false);
  const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState<boolean>(false);
  const handleClick = (): void => {
    setIsPrepareMenuVisible((prev) => !prev);
  };

  const handleOpenMenuClick = (): void => {
    setIsBurgerMenuVisible((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapperHeader}>
        <nav className={styles.nav}>
          <Link to="/">
            <div className={styles.maxLogo}></div>
            <div className={styles.miniLogo}></div>
          </Link>
          <div className={styles.navListWrapper}>
            <button onClick={handleClick} className={styles.prepareButton}>
              Подготовка
            </button>
            <Navigation isVisible={isPrepareMenuVisible} />
          </div>
        </nav>
        <div className={styles.buttonsWrapper}>
          <button
            onClick={handleOpenMenuClick}
            aria-label={isBurgerMenuVisible ? 'Закрыть меню' : 'Открыть меню'}
            className={styles.burgerMenu}></button>
          <div className={`${styles.buttons} ${isBurgerMenuVisible ? styles.loginVisible : ''}`}>
            <button className={styles.enterButton}>Вход</button>
            <button className={styles.signUpButton}>Регистрация</button>
          </div>
        </div>
      </div>
    </header>
  );
}
