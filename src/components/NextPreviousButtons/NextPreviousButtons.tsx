import { useRef, useState } from 'react';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import useCollections from '../../hooks/useCollections';
import styles from './index.module.css';

const NextPreviousButtons: React.FC = () => {
  const location = useLocation();
  const { questions, totalPages, setRetryTick } = useCollections();
  const { questionId, collectionId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const navigate = useNavigate();
  const pendingRef = useRef(null);
  const [failedTarget, setFailedTarget] = useState(null);

  const changePage = (page: number) => {
    const next = new URLSearchParams(searchParams);
    next.set('page', String(page));
    setSearchParams(next);
  };

  const handlePrevClick = () => {
    setFailedTarget(null);
    if (pendingRef.current !== null) return;
    if (!questions.length) return;
    const currentIndex = questions.findIndex((q) => q.id === Number(questionId));
    if (currentIndex === -1) {
      navigate({
        pathname: `/collections/${collectionId}/questions/${questions[questions.length - 1].id}`,
        search: location.search,
      });
    } else if (currentIndex > 0) {
      navigate({
        pathname: `/collections/${collectionId}/questions/${questions[currentIndex - 1].id}`,
        search: location.search,
      });
    } else if (currentIndex === 0) {
      const targetPage = page > 1 ? page - 1 : totalPages;
      changePage(targetPage);
    }
  };

  const handleNextClick = () => {
    setFailedTarget(null);
    if (pendingRef.current !== null) return;
    if (!questions.length) return;
    const currentIndex = questions.findIndex((q) => q.id === Number(questionId));
    if (currentIndex === -1) {
      navigate({
        pathname: `/collections/${collectionId}/questions/${questions[0].id}`,
        search: location.search,
      });
    } else if (currentIndex < questions.length - 1) {
      navigate({
        pathname: `/collections/${collectionId}/questions/${questions[currentIndex + 1].id}`,
        search: location.search,
      });
    } else if (currentIndex === questions.length - 1) {
      const targetPage = page < totalPages ? page + 1 : 1;
      changePage(targetPage);
    }
  };

  const handleRepeat = () => {
    if (!failedTarget) return;

    pendingRef.current = failedTarget;
    setFailedTarget(null);
    setRetryTick((t) => t + 1);
  };

  return (
    <>
      {failedTarget && (
        <div>
          <p>Не удалось загрузить вопрос</p>
          <button className={styles.repeatButton} onClick={handleRepeat}>
            Повторить
          </button>
        </div>
      )}
      <div className={styles.linksWrapper}>
        <button onClick={handlePrevClick} className={`${styles.linkPrev} ${styles.link}`}>
          Предыдущий
        </button>
        <button onClick={handleNextClick} className={`${styles.linkNext} ${styles.link}`}>
          Следующий
        </button>
      </div>
    </>
  );
};

export default NextPreviousButtons;
