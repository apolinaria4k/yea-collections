import type { ISpecialization } from '../../interfaces';
import SpecializationsBlock from '../SpecializationsBlock/SpecializationsBlock';
import ButtonClose from '../UI/ButtonClose/ButtonClose';
import MyInput from '../UI/MyInput/MyInput';
import styles from './index.module.css';
import AccessBlock from '../AccessBlock/AccessBlock';
import type { FC, Dispatch, SetStateAction } from 'react';

interface Props {
  totalSpecs: number;
  specializations: ISpecialization[];
  setSpecializations: Dispatch<React.SetStateAction<ISpecialization[]>>;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const AllCollectionsAside: FC<Props> = ({
  totalSpecs,
  specializations,
  setSpecializations,
  isVisible,
  setIsVisible,
}) => {
  const access = [
    { id: 1, title: 'Для участников', isFree: false },
    { id: 2, title: 'Для всех', isFree: true },
  ];

  return (
    <>
      <aside className={`${styles.aside} ${isVisible ? styles.visible : ''}`}>
        <ButtonClose setIsVisible={setIsVisible}></ButtonClose>

        <div className={styles.innerWrapper}>
          <MyInput />

          <SpecializationsBlock
            title="Специализация"
            specializations={specializations}
            setSpecializations={setSpecializations}
            totalSpecs={totalSpecs}
          />

          <AccessBlock title="Доступ" data={access}></AccessBlock>
        </div>
      </aside>
    </>
  );
};

export default AllCollectionsAside;
