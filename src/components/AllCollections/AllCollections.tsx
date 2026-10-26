import { useEffect, useState } from 'react';
import AllCollectionsAside from '../AllCollectionsAside/AllCollectionsAside';
import AllCollectionsSection from '../AllCollectionsSection/AllCollectionsSection';
import styles from './index.module.css';
import { useFetching } from '../../hooks/useFetching';
import CollectionService from '../../API/CollectionService';
import useCollections from '../../hooks/useCollections';
import { getTotalPages } from '../../utils/getTotalPages';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';
import type { ISpecialization, Specialization } from '../../interfaces';

export const AllCollections: React.FC = () => {
  const { collections, setCollections, setTotalPages } = useCollections();
  const [specs, setSpecs] = useState<ISpecialization[]>([]);
  const [totalSpecs, setTotalSpecs] = useState<number>(5);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const specialization = Number(searchParams.get('specialization')) || null;

  const value = searchParams.get('value') || '';
  const debouncedValue = useDebounce(value, 400);

  const [fetchCollections, status, error] = useFetching(
    async (page: number, titleOrDescriptionSearch: string, specialization: Specialization) => {
      const response = await CollectionService.getAllCollections(
        page,
        titleOrDescriptionSearch,
        specialization,
      );
      setCollections(response.data.data);
      console.log(response.data);
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
    fetchCollections(page, debouncedValue, specialization);
  }, [page, debouncedValue, specialization]);

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
