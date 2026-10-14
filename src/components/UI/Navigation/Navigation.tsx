import styles from './index.module.css';

interface Props {
  isVisible: boolean;
}

export default function Navigation({ isVisible }: Props) {
  return (
    <ul className={`${styles.navList} ${isVisible ? styles.visible : ''}`}>
      <li>База вопросов</li>
      <li>Тренажер</li>
      <li>Материалы</li>
      <li>Навыки(hh)</li>
    </ul>
  );
}
