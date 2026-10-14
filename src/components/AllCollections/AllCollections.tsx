import { useEffect, useState } from 'react';
import AllCollectionsAside from '../AllCollectionsAside/AllCollectionsAside';
import AllCollectionsSection from '../AllCollectionsSection/AllCollectionsSection';
import styles from './index.module.css';
import axios from 'axios';

export default function AllCollections() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // const [collections, setCollections] = useState([]);

  async function fetchCollections() {
    try {
      const response = await axios.get('https://api.yeatwork.ru/collections/public', {
        params: {
          page: 1,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.wrapperMain}>
          <AllCollectionsSection />
          <AllCollectionsAside isVisible={isVisible} />
        </div>
      </main>
    </>
  );
}
