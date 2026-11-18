import { useEffect, useState } from 'react';
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
  const {
    setQuestions,
    questions,
    setLoadedPage,
    setTotalPages,
    setListStatus,
    setListError,
    loadedPage,
    retryTick,
  } = useCollections();
  const { questionId, collectionId } = useParams<{ questionId: string; collectionId: string }>();
  const [questionData, setQuestionData] = useState<IQuestion>();
  const [isVisible, setIsVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const target = searchParams.get('target');

  const isListStale = loadedPage !== page;
  const isQuestionInList = questions.some((q) => q.id === Number(questionId));

  const [fetchAllQuestions, questionsStatus, questionsError] = useFetching(
    async (signal, page, collectionId) => {
      const response = await CollectionService.getAllQuestions(
        Number(page),
        Number(collectionId),
        signal,
      );
      setQuestions(response.data.data);
      setLoadedPage(Number(page));
      setTotalPages(getTotalPages(response.data.total));
    },
  );

  const [fetchQuestionData, questionStatus] = useFetching(async (signal, questionId) => {
    const response = await CollectionService.getQuestionById(Number(questionId), signal);
    setQuestionData(response.data);
  });

  useEffect(() => {
    setListStatus(questionsStatus);
    setListError(questionsError);
  }, [questionsStatus, questionsError]);

  useEffect(() => {
    if (!collectionId) return;
    fetchAllQuestions(page, Number(collectionId));
  }, [page, retryTick, collectionId]);

  useEffect(() => {
    if (!questionId) return;
    fetchQuestionData(Number(questionId));
  }, [questionId]);

  useEffect(() => {
    if (!target) return;
    if (questionsStatus !== 'success' || isListStale) return;
    if (!questions.length) return;

    const id = target === 'first' ? questions[0].id : questions[questions.length - 1].id;

    const next = new URLSearchParams(searchParams);
    next.delete('target');

    navigate(
      { pathname: `/collections/${collectionId}/questions/${id}`, search: next.toString() },
      { replace: true },
    );
  }, [target, questionsStatus, questions, isListStale, collectionId, navigate, searchParams]);

  let content: ReactNode;

  if (
    questionsStatus === 'idle' ||
    questionsStatus === 'loading' ||
    isListStale ||
    questionStatus === 'loading'
  ) {
    content = <OneQuestionSkeleton />;
  } else if (questionsStatus === 'error') {
    content = <NotFound />;
  } else if (!questionData || questionData.id !== Number(questionId) || !isQuestionInList) {
    if (target) {
      content = <OneQuestionSkeleton />;
    } else {
      content = <NotFound />;
    }
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
