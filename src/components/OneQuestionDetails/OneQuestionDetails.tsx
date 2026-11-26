import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import OneQuestionDetailsAside from '../OneQuestionDetailsAside/OneQuestionDetailsAside';
import OneQuestionDetailsSection from '../OneQuestionDetailsSection/OneQuestionDetailsSection';
import CollectionService from '../../API/CollectionService';
import useCollections from '../../hooks/useCollections';
import { useFetching } from '../../hooks/useFetching';
import type { IQuestion } from '../../interfaces';
import { getTotalPages } from '../../utils/getTotalPages';
import styles from './index.module.css';
import NotFound from '../NotFound/NotFound';
import type { FC, ReactNode } from 'react';
import OneQuestionSkeleton from '../OneQuestionSkeleton/OneQuestionSkeleton';

const OneQuestionDetails: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setQuestionsPage, setQuestionsStatus, setQuestionsError, questionsPage } =
    useCollections();
  const { questionId, collectionId } = useParams<{ questionId: string; collectionId: string }>();
  const [questionData, setQuestionData] = useState<IQuestion>();
  const [isVisible, setIsVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const target = searchParams.get('target');

  const routeRef = useRef({ collectionId: Number(collectionId), page });
  useEffect(() => {
    routeRef.current = { collectionId: Number(collectionId), page };
  }, [collectionId, page]);

  const isListCurrent =
    questionsPage !== null &&
    questionsPage.collectionId === Number(collectionId) &&
    questionsPage.page === page;
  const questions = isListCurrent ? questionsPage!.data : [];
  const isListStale = !isListCurrent;

  const [fetchAllQuestions, questionsStatus, questionsError] = useFetching(
    async (signal: AbortSignal, page: number, collectionId: number) => {
      if (!Number.isFinite(collectionId)) return;
      const response = await CollectionService.getAllQuestions(page, collectionId, signal);
      if (signal.aborted) return;

      const current = routeRef.current;
      if (current.collectionId !== collectionId || current.page !== page) return;

      setQuestionsPage({
        collectionId,
        page,
        data: response.data.data,
        totalPages: getTotalPages(response.data.total, response.data.limit),
      });
    },
  );

  const [fetchQuestionData, questionStatus] = useFetching(
    async (signal: AbortSignal, id: number) => {
      const response = await CollectionService.getQuestionById(id, signal);
      if (signal.aborted) return;
      setQuestionData(response.data);
    },
  );

  useEffect(() => {
    setQuestionsStatus(questionsStatus);
    setQuestionsError(questionsError);
  }, [questionsStatus, questionsError, setQuestionsStatus, setQuestionsError]);

  useEffect(() => {
    if (!collectionId) return;
    fetchAllQuestions(page, Number(collectionId));
  }, [page, collectionId]);

  useEffect(() => {
    if (!questionId) return;
    fetchQuestionData(Number(questionId));
  }, [questionId]);

  useEffect(() => {
    if (!target) return;
    if (isListStale) return;

    if (questionsStatus === 'error') {
      const next = new URLSearchParams(searchParams);
      next.delete('target');
      setSearchParams(next, { replace: true });
      return;
    }

    if (questionsStatus !== 'success') return;

    if (!questions.length) {
      const next = new URLSearchParams(searchParams);
      next.delete('target');
      const fallbackPage = Math.max(1, page - 1);
      next.set('page', String(fallbackPage));
      navigate(
        { pathname: `/collections/${collectionId}`, search: next.toString() },
        { replace: true },
      );
      return;
    }

    const id = target === 'first' ? questions[0].id : questions[questions.length - 1].id;
    const next = new URLSearchParams(searchParams);
    next.delete('target');
    navigate(
      { pathname: `/collections/${collectionId}/questions/${id}`, search: next.toString() },
      { replace: true },
    );
  }, [
    target,
    questionsStatus,
    questions,
    isListStale,
    page,
    collectionId,
    navigate,
    searchParams,
    setSearchParams,
  ]);

  let content: ReactNode;

  if (questionsStatus === 'error') {
    content = <NotFound />;
  } else if (
    questionsStatus === 'idle' ||
    questionsStatus === 'loading' ||
    isListStale ||
    questionStatus === 'loading'
  ) {
    content = <OneQuestionSkeleton />;
  } else if (!questionData || questionData.id !== Number(questionId)) {
    content = target ? <OneQuestionSkeleton /> : <NotFound />;
  } else {
    content = (
      <>
        <OneQuestionDetailsSection setIsVisible={setIsVisible} question={questionData} />
        <OneQuestionDetailsAside
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          question={questionData}
        />
      </>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.linkWrapper}>
        <Link
          to={{ pathname: `/collections/${collectionId}`, search: location.search }}
          className={styles.link}>
          Назад
        </Link>
      </div>
      <div className={styles.wrapperMain}>{content}</div>
    </main>
  );
};

export default OneQuestionDetails;
