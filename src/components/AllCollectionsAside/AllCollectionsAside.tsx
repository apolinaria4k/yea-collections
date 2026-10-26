import type { ISpecialization } from '../../interfaces';
import SpecializationsBlock from '../SpecializationsBlock/SpecializationsBlock';
import ButtonClose from '../UI/ButtonClose/ButtonClose';
import MyInput from '../UI/MyInput/MyInput';
import styles from './index.module.css';

interface Props {
  totalSpecs: number;
  specializations: ISpecialization[];
  setSpecializations: React.Dispatch<React.SetStateAction<ISpecialization[]>>;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AllCollectionsAside: React.FC<Props> = ({
  totalSpecs,
  specializations,
  setSpecializations,
  isVisible,
  setIsVisible,
}) => {
  return (
    <>
      <aside className={`${styles.aside} ${isVisible ? styles.visible : ''}`}>
        <ButtonClose setIsVisible={setIsVisible}></ButtonClose>

        <div className={styles.innerWrapper}>
          <MyInput></MyInput>

          <SpecializationsBlock
            title="Специализация"
            specializations={specializations}
            setSpecializations={setSpecializations}
            totalSpecs={totalSpecs}
          />
        </div>
      </aside>
    </>
  );
};

export default AllCollectionsAside;
