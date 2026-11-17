import { useSearchParams } from 'react-router-dom';
import styles from './index.module.css';
import type { ISpecialization } from '../../../interfaces';
import { useMemo, type FC } from 'react';

interface Props {
  specialization: ISpecialization;
}

const SpecializationAside: FC<Props> = ({ specialization }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const specs = searchParams.get('specializations');

  const arrSpecs = useMemo(
    () => (specs ? specs.split(',').map((item) => Number(item)) : []),
    [specs],
  );

  const changeSpec = (spec: number) => {
    const next = new URLSearchParams(searchParams);

    const newSpecs = arrSpecs.includes(spec)
      ? arrSpecs.filter((s) => s !== spec)
      : [...arrSpecs, spec];

    next.set('specializations', newSpecs.join(','));
    next.set('page', String(1));

    setSearchParams(next);
  };

  return (
    <div>
      <button
        onClick={() => changeSpec(specialization.id)}
        className={arrSpecs.includes(specialization.id) ? styles.activeButton : styles.button}>
        {specialization.title}
      </button>
    </div>
  );
};

export default SpecializationAside;
