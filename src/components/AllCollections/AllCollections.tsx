import { useEffect, useState } from 'react';
import AllCollectionsAside from '../AllCollectionsAside/AllCollectionsAside';
import AllCollectionsSection from '../AllCollectionsSection/AllCollectionsSection';
import styles from './index.module.css';
import { useFetching } from '../../hooks/useFetching';
import CollectionService from '../../API/CollectionService';
import useCollections from '../../hooks/useCollections';
import { getTotalPages } from '../../utils/getTotalPages';
import { useSearchParams } from 'react-router-dom';

export const AllCollections: React.FC = () => {
  const { collections, setCollections, setTotalPages } = useCollections();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const [fetchCollections, status, error] = useFetching(async () => {
    const response = await CollectionService.getAllCollections(page);
    setCollections(response.data.data);
    const totalCount = response.data.total;
    setTotalPages(getTotalPages(totalCount));
  });

  useEffect(() => {
    fetchCollections(page);
  }, [page]);

  console.log(collections);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.wrapperMain}>
          <AllCollectionsSection status={status} error={error} />
          <AllCollectionsAside isVisible={isVisible} />
        </div>
      </main>
    </>
  );
};
