import { useSearchParams } from 'react-router-dom';
import styles from './index.module.css';
import type { ISpecialization } from '../../../interfaces';

interface Props {
  specialization: ISpecialization;
}

const SpecializationAside: React.FC<Props> = ({ specialization }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const specs = searchParams.get('specializations');
  const arrSpecs = specs ? specs.split(',').map((item) => Number(item)) : [];

  const changeSpec = (spec: number) => {
    const next = new URLSearchParams(searchParams);

    const arrSpecs = specs ? specs.split(',').map((item) => Number(item)) : [];

    const newSpecs = arrSpecs.includes(spec)
      ? arrSpecs.filter((s) => s !== spec)
      : [...arrSpecs, spec];

    next.set('specializations', newSpecs.join(','));
    next.set('page', String(1));

    setSearchParams(next);
  };

  const handleClick = (id: number) => {
    changeSpec(id);
    console.log(id);
  };

  return (
    <div>
      <button
        onClick={() => handleClick(Number(specialization.id))}
        className={
          arrSpecs.includes(Number(specialization.id)) ? styles.activeButton : styles.button
        }>
        {specialization.title}
      </button>
    </div>
  );
};

export default SpecializationAside;
