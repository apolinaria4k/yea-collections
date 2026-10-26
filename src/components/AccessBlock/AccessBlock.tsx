import type { IAccess } from '../../interfaces';
import styles from '../AllCollectionsAside/index.module.css';
import MyTitle from '../UI/MyTitle/MyTitle';
import AccessAside from '../UI/AccessAside/AccessAside';
import { useSearchParams } from 'react-router-dom';

interface Props {
  title: string;
  data: IAccess[];
}

const SpecializationsBlock: React.FC<Props> = ({ title, data }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const stringIsFree = searchParams.get('isFree');

  const handleClick = (isFree: string) => {
    const next = new URLSearchParams(searchParams);
    if (isFree === stringIsFree) {
      next.delete('isFree');
    } else {
      next.set('isFree', isFree);
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
              onClick={() => handleClick(String(item.isFree))}
              isActive={stringIsFree === String(item.isFree)}
              access={item}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SpecializationsBlock;
