import styles from './index.module.css';
import parse from 'html-react-parser';
import { useId, type FC } from 'react';

interface Props {
  text: string;
}
const LongAnswer: FC<Props> = ({ text }) => {
  const id = useId();
  return (
    <div className={styles.buttonWrapper}>
      <input type="checkbox" id={id} className={styles.checker} />
      <div className={styles.wrapper}>
        <p className={styles.preTitle}>Развернутый ответ</p>
        <div className={styles.text}>{parse(text)}</div>
        <div className={styles.bottom}></div>
      </div>

      <label htmlFor={id} className={styles.button}></label>
    </div>
  );
};

export default LongAnswer;
