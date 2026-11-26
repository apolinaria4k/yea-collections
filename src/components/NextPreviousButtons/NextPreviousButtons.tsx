import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import useCollections from '../../hooks/useCollections';
import styles from './index.module.css';
import type { FC } from 'react';

const NextPreviousButtons: FC = () => {
  const location = useLocation();
  const { questionsPage } = useCollections();
  const { questionId, collectionId } = useParams<{ questionId: string; collectionId: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const navigate = useNavigate();

  const isCurrent =
    questionsPage !== null &&
    questionsPage.collectionId === Number(collectionId) &&
    questionsPage.page === page;
  const questions = isCurrent ? questionsPage!.data : [];
  const totalPages = isCurrent ? questionsPage!.totalPages : 0;

  const currentIndex = questions.findIndex((q) => q.id === Number(questionId));

  const isPrevDisabled = questions.length === 0 || (currentIndex === 0 && page <= 1);
  const isNextDisabled =
    questions.length === 0 || (currentIndex === questions.length - 1 && page >= totalPages);

  const goToQuestion = (id: number) => {
    navigate({
      pathname: `/collections/${collectionId}/questions/${id}`,
      search: location.search,
    });
  };

  const handlePrevClick = () => {
    if (!questions.length) return;
    if (currentIndex === 0 && page <= 1) return;

    if (currentIndex === -1) {
      goToQuestion(questions[questions.length - 1].id);
    } else if (currentIndex > 0) {
      goToQuestion(questions[currentIndex - 1].id);
    } else if (currentIndex === 0) {
      const targetPage = page > 1 ? page - 1 : totalPages;
      const next = new URLSearchParams(searchParams);
      next.set('page', String(targetPage));
      next.set('target', 'last');
      setSearchParams(next);
    }
  };

  const handleNextClick = () => {
    if (!questions.length) return;
    if (currentIndex === questions.length - 1 && page >= totalPages) return;

    if (currentIndex === -1) {
      goToQuestion(questions[0].id);
    } else if (currentIndex < questions.length - 1) {
      goToQuestion(questions[currentIndex + 1].id);
    } else if (currentIndex === questions.length - 1) {
      const targetPage = page < totalPages ? page + 1 : 1;
      const next = new URLSearchParams(searchParams);
      next.set('page', String(targetPage));
      next.set('target', 'first');
      setSearchParams(next);
    }
  };

  return (
    <div className={styles.linksWrapper}>
      <button
        onClick={handlePrevClick}
        disabled={isPrevDisabled}
        className={`${styles.linkPrev} ${styles.link}`}>
        Предыдущий
      </button>
      <button
        onClick={handleNextClick}
        disabled={isNextDisabled}
        className={`${styles.linkNext} ${styles.link}`}>
        Следующий
      </button>
    </div>
  );
};

export default NextPreviousButtons;
