import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import CollectionService from '../../API/CollectionService';
import { useFetching } from '../../hooks/useFetching';
import type { ICollection, IQuestion } from '../../interfaces';
import styles from './index.module.css';
import PublicCollectionsSection from '../PublicCollectionsSection/PublicCollectionsSection';
import PublicCollectionsAside from '../PublicCollectionsAside/PublicCollectionsAside';
import useCollections from '../../hooks/useCollections';
import { getTotalPages } from '../../utils/getTotalPages';

export const PublicCollectionDetails: React.FC = () => {
  const { collectionId } = useParams();
  const { setTotalPages } = useCollections();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [collection, setCollection] = useState<ICollection>();
  const [questions, setQuestions] = useState<IQuestion[]>();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const [fetchCollection] = useFetching(async (collectionId) => {
    const response = await CollectionService.getCollectionById(Number(collectionId));
    setCollection(response.data);
  });

  const [fetchAllQuestions, status, error] = useFetching(
    async (page: number, collectionId: number) => {
      const response = await CollectionService.getAllQuestions(page, collectionId);
      setQuestions(response.data.data);
      const totalCount = response.data.total;
      setTotalPages(getTotalPages(totalCount));
      // console.log(response.data.data);
    },
  );

  useEffect(() => {
    fetchCollection(collectionId);
  }, [collectionId]);

  useEffect(() => {
    fetchAllQuestions(page, Number(collectionId));
  }, [page, collectionId]);

  // const specializations = searchParams.get('specializations') || '';
  // const isFree = searchParams.get('isFree') || '';

  // const value = searchParams.get('value') || '';
  // const debouncedValue = useDebounce(value, 400);

  // const [fetchCollections, status, error] = useFetching(
  //   async (
  //     page: number,
  //     titleOrDescriptionSearch: string,
  //     specializations: string,
  //     isFree: string,
  //   ) => {
  //     const response = await CollectionService.getAllCollections(
  //       page,
  //       titleOrDescriptionSearch,
  //       specializations,
  //       isFree,
  //     );
  //     setCollections(response.data.data);
  //     console.log(response.data);
  //     const totalCount = response.data.total;
  //     setTotalPages(getTotalPages(totalCount));
  //   },
  // );

  // const [fetchSpecializations] = useFetching(async () => {
  //   const response = await CollectionService.getAllSpecializations();
  //   setSpecs(response.data.data);
  //   setTotalSpecs(response.data.total);
  // });

  // useEffect(() => {
  //   fetchCollections(page, debouncedValue, specializations, isFree);
  // }, [page, debouncedValue, specializations, isFree]);

  // useEffect(() => {
  //   fetchSpecializations();
  // }, []);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.wrapperMain}>
          {!collection ? (
            <h1>Загрузка...</h1>
          ) : (
            <>
              {status === 'idle' || status === 'loading' ? (
                // <Skeleton />
                <h1>Загрузка...</h1>
              ) : status === 'error' ? (
                <h2 className={styles.title}>{error}</h2>
              ) : !questions ? (
                <h1>Загрузка...</h1>
              ) : (
                <PublicCollectionsSection
                  collection={collection}
                  questions={questions}
                  status={status}
                  error={error}
                  setIsVisible={setIsVisible}
                />
              )}
              <PublicCollectionsAside
                collection={collection}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
              />
            </>
          )}
        </div>
      </main>
    </>
  );
};
