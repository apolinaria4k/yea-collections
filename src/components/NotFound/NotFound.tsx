import { Link, useLocation } from 'react-router-dom';
import styles from './index.module.css';

export default function NotFound() {
  const location = useLocation();
  return (
    <div className={styles.main}>
      <div className={styles.wrapperMain}>
        <div className={styles.textWrapper}>
          <p>Такая страница не найдена</p>
        </div>
        <Link to={{ pathname: `/`, search: location.search }} className={styles.link}>
          К списку коллекций
        </Link>
      </div>
    </div>
  );
}
