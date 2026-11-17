import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CollectionService from '../../API/CollectionService';
import useCollections from '../../hooks/useCollections';
import { useDebounce } from '../../hooks/useDebounce';
import { useFetching } from '../../hooks/useFetching';
import type { ISpecialization } from '../../interfaces';
import { getTotalPages } from '../../utils/getTotalPages';
import AllCollectionsAside from '../AllCollectionsAside/AllCollectionsAside';
import AllCollectionsSection from '../AllCollectionsSection/AllCollectionsSection';
import styles from './index.module.css';

export const AllCollections: FC = () => {
  const { setCollections, setTotalPages } = useCollections();
  const [specs, setSpecs] = useState<ISpecialization[]>([]);
  const [totalSpecs, setTotalSpecs] = useState<number>(5);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const specializations = searchParams.get('specializations') || '';
  const isFree = searchParams.get('isFree') || '';

  const value = searchParams.get('value') || '';
  const debouncedValue = useDebounce(value, 400);

  const [fetchCollections, status, error] = useFetching(
    async (
      page: number,
      titleOrDescriptionSearch: string,
      specializations: string,
      isFree: string,
    ) => {
      const response = await CollectionService.getAllCollections(
        page,
        titleOrDescriptionSearch,
        specializations,
        isFree,
      );
      setCollections(response.data.data);
      const totalCount = response.data.total;
      setTotalPages(getTotalPages(totalCount));
    },
  );

  const [fetchSpecializations] = useFetching(async () => {
    const response = await CollectionService.getAllSpecializations();
    setSpecs(response.data.data);
    setTotalSpecs(response.data.total);
  });

  useEffect(() => {
    fetchCollections(page, debouncedValue, specializations, isFree);
  }, [page, debouncedValue, specializations, isFree]);

  useEffect(() => {
    fetchSpecializations();
  }, []);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.wrapperMain}>
          <AllCollectionsSection status={status} error={error} setIsVisible={setIsVisible} />
          <AllCollectionsAside
            totalSpecs={totalSpecs}
            specializations={specs}
            setSpecializations={setSpecs}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
          />
        </div>
      </main>
    </>
  );
};
