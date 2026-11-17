import type { ISpecialization } from '../../../interfaces';
import styles from './index.module.css';
import type { FC } from 'react';
interface Props {
  specialization: ISpecialization;
}

const Specialization: FC<Props> = ({ specialization }) => {
  return <li className={styles.specialization}>{specialization.title}</li>;
};

export default Specialization;
