import styles from './index.module.css';
import parse from 'html-react-parser';

interface Props {
  text: string;
}
const LongAnswer: React.FC<Props> = ({ text }) => {
  return (
    <div className={styles.buttonWrapper}>
      <input type="checkbox" id="showMoreChecker" className={styles.checker} />
      <div className={styles.wrapper}>
        <p className={styles.preTitle}>Развернутый ответ</p>
        <div className={styles.text}>{parse(text)}</div>
        <div className={styles.bottom}></div>
      </div>

      <label htmlFor="showMoreChecker" className={styles.button}></label>
    </div>
  );
};

export default LongAnswer;
