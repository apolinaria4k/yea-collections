import MyTitle from '../UI/MyTitle/MyTitle';
import styles from '../AllCollectionsAside/index.module.css';
import type { ISpecialization } from '../../interfaces';
import ButtonLookAll from '../UI/ButtonLookAll/ButtonLookAll';
import { useFetching } from '../../hooks/useFetching';
import CollectionService from '../../API/CollectionService';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SpecializationAside from '../UI/SpecializationAside/SpecializationAside';

interface Props {
  title: string;
  specializations: ISpecialization[];
  setSpecializations: React.Dispatch<React.SetStateAction<ISpecialization[]>>;
  totalSpecs: number;
}

const SpecializationsBlock: React.FC<Props> = ({
  title,
  specializations,
  setSpecializations,
  totalSpecs,
}) => {
  const [isLookAll, setIsLookAll] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = Number(searchParams.get('specialization'));

  const [fetchSpecializations] = useFetching(async () => {
    const response = await CollectionService.getAllSpecializations(
      isLookAll ? undefined : totalSpecs,
    );
    setSpecializations(response.data.data);
  });

  const lookAllClick = () => {
    fetchSpecializations();
    setIsLookAll((prev) => !prev);
  };

  const handleClick = (id: number) => {
    const next = new URLSearchParams(searchParams);
    if (id === selectedId) {
      next.delete('specialization');
    } else {
      next.set('specialization', String(id));
    }
    next.set('page', String(1));
    setSearchParams(next);
  };

  return (
    <>
      <div>
        <MyTitle title={title} />
        <div className={styles.variants}>
          {specializations.map((item) => (
            <SpecializationAside
              onClick={() => handleClick(Number(item.id))}
              isActive={selectedId === Number(item.id)}
              key={item.id}
              title={item.title}
            />
          ))}
        </div>
        <ButtonLookAll onClick={() => lookAllClick()} isLookAll={isLookAll} />
      </div>
    </>
  );
};

export default SpecializationsBlock;
