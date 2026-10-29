import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CollectionService from '../../API/CollectionService';
import { useFetching } from '../../hooks/useFetching';
import type { ICollection } from '../../interfaces';
import styles from './index.module.css';
import PublicCollectionsSection from '../PublicCollectionsSection/PublicCollectionsSection';

export const PublicCollectionDetails: React.FC = () => {
  const { collectionId } = useParams();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [collection, setCollection] = useState<ICollection>();

  const [fetchCollection] = useFetching(async (collectionId) => {
    const response = await CollectionService.getCollectionById(Number(collectionId));
    setCollection(response.data);
  });

  useEffect(() => {
    fetchCollection(collectionId);
  }, [collectionId]);

  // const page = Number(searchParams.get('page')) || 1;
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
          <PublicCollectionsSection collection={collection} setIsVisible={setIsVisible} />
          {/* <PublicCollectionsAside
            totalSpecs={totalSpecs}
            specializations={specs}
            setSpecializations={setSpecs}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
          /> */}
        </div>
      </main>
    </>
  );
};
