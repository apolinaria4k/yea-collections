import MyTitle from '../UI/MyTitle/MyTitle';
import styles from '../AllCollectionsAside/index.module.css';
import type { ISpecialization } from '../../interfaces';
import ButtonLookAll from '../UI/ButtonLookAll/ButtonLookAll';
import { useFetching } from '../../hooks/useFetching';
import CollectionService from '../../API/CollectionService';
import { useState } from 'react';
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

  return (
    <>
      <div>
        <MyTitle title={title} />
        <div className={styles.variants}>
          {specializations.map((item) => (
            <SpecializationAside key={item.id} specialization={item} />
          ))}
        </div>
        <ButtonLookAll onClick={() => lookAllClick()} isLookAll={isLookAll} />
      </div>
    </>
  );
};

export default SpecializationsBlock;
