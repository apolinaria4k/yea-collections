import styles from './index.module.css';
import parse from 'html-react-parser';

interface Props {
  text: string;
}
const ShortAnswer: React.FC<Props> = ({ text }) => {
  return (
    <>
      <p className={styles.preTitle}>Краткий ответ</p>
      <div className={styles.text}>{parse(text)}</div>
    </>
  );
};

export default ShortAnswer;
