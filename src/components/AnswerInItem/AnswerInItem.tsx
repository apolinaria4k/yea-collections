import parse from 'html-react-parser';
import { Link, useLocation, useParams } from 'react-router-dom';
import Characteristic from '../UI/Сharacteristic/Characteristic';
import styles from './index.module.css';
import { sanitizeHtml } from '../../utils/sanitizeHtml';
import type { FC } from 'react';

interface Props {
  id: number;
  rate: number;
  complexity: number;
  shortAnswer: string;
}

const AnswerInItem: FC<Props> = ({ id, rate, complexity, shortAnswer }) => {
  const location = useLocation();
  const { collectionId } = useParams<{ collectionId: string }>();
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperCharacter}>
        <Characteristic title="Рейтинг" value={rate} />
        <Characteristic title="Сложность" value={complexity} />
      </div>
      <div className={styles.textOfAnswer}>{parse(sanitizeHtml(shortAnswer))}</div>
      <div className={styles.linkWrapper}>
        <Link
          to={{ pathname: `/collections/${collectionId}/questions/${id}`, search: location.search }}
          className={styles.link}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default AnswerInItem;
