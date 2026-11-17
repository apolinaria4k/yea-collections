import type { ISpecialization } from '../../../interfaces';
import styles from './index.module.css';
import type { FC } from 'react';

interface Props {
  specialization: ISpecialization;
}

const PublicSpecializationAside: FC<Props> = ({ specialization }) => {
  return (
    <div>
      <button className={styles.button}>{specialization.title}</button>
    </div>
  );
};

export default PublicSpecializationAside;
