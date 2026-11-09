import parse from 'html-react-parser';
import { Link, useLocation } from 'react-router-dom';
import Characteristic from '../UI/Сharacteristic/Characteristic';
import styles from './index.module.css';
import { sanitizeHtml } from '../../utils/sanitizeHtml';

interface Props {
  id: number;
  rate: number;
  complexity: number;
  shortAnswer: string;
}

const AnswerInItem: React.FC<Props> = ({ id, rate, complexity, shortAnswer }) => {
  const location = useLocation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperCharacter}>
        <Characteristic title="Рейтинг" value={rate} />
        <Characteristic title="Сложность" value={complexity} />
      </div>
      <div className={styles.textOfAnswer}>{parse(sanitizeHtml(shortAnswer))}</div>
      <div className={styles.linkWrapper}>
        <Link
          to={{ pathname: `/questions/${id}`, search: location.search }}
          className={styles.link}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default AnswerInItem;
