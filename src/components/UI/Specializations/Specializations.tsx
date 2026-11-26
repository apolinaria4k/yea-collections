import type { ISpecialization } from '../../../interfaces';
import Specialization from '../Specialization/Specialization';
import styles from './index.module.css';
import type { FC } from 'react';

interface Props {
  specializations: ISpecialization[];
}

const Specializations: FC<Props> = ({ specializations }) => {
  return (
    <ul className={styles.specializationsWrapper}>
      {specializations.map((s) => (
        <Specialization key={s.id} specialization={s} />
      ))}
    </ul>
  );
};

export default Specializations;
