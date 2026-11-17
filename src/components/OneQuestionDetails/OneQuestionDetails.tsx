import { useEffect, useState } from 'react';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
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
  const { setQuestions, setLoadedPage, setTotalPages, setListStatus, setListError, retryTick } =
    useCollections();
  const { questionId, collectionId } = useParams<{ questionId: string; collectionId: string }>();
  const [questionData, setQuestionData] = useState<IQuestion>();
  const [isVisible, setIsVisible] = useState(false);
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const [fetchAllQuestions, questionsStatus, questionsError] = useFetching(
    async (page: number, collectionId: number) => {
      const response = await CollectionService.getAllQuestions(page, collectionId);
      setQuestions(response.data.data);
      const totalCount = response.data.total;
      setTotalPages(getTotalPages(totalCount));
    },
  );

  const [fetchQuestionData] = useFetching(async (questionId: number) => {
    const response = await CollectionService.getQuestionById(Number(questionId));
    setQuestionData(response.data);
  });

  useEffect(() => {
    setListStatus(questionsStatus);
    setListError(questionsError);
  }, [questionsStatus, questionsError]);

  useEffect(() => {
    fetchAllQuestions(page, Number(collectionId));
  }, [page, retryTick]);

  useEffect(() => {
    fetchQuestionData(Number(questionId));
  }, [questionId]);

  let content: ReactNode;

  if (questionsStatus === 'idle' || questionsStatus === 'loading') {
    content = <OneQuestionSkeleton />;
  } else if (questionsStatus === 'error') {
    content = <h1>Вопрос не найден</h1>;
  } else if (!questionData) {
    content = <NotFound />;
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
