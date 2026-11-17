import type { IAccess } from '../../interfaces';
import styles from '../AllCollectionsAside/index.module.css';
import MyTitle from '../UI/MyTitle/MyTitle';
import AccessAside from '../UI/AccessAside/AccessAside';
import { useSearchParams } from 'react-router-dom';
import type { FC } from 'react';

interface Props {
  title: string;
  data: IAccess[];
}

const AccessBlock: FC<Props> = ({ title, data }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const stringIsFree = searchParams.get('isFree');

  const handleClick = (isFree: boolean) => {
    const next = new URLSearchParams(searchParams);
    if (String(isFree) === stringIsFree) {
      next.delete('isFree');
    } else {
      next.set('isFree', String(isFree));
    }
    next.set('page', String(1));
    setSearchParams(next);
  };

  return (
    <>
      <div>
        <MyTitle title={title} />
        <div className={styles.variants}>
          {data.map((item) => (
            <AccessAside
              key={item.id}
              onClick={() => handleClick(item.isFree)}
              isActive={stringIsFree === String(item.isFree)}
              access={item}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AccessBlock;
