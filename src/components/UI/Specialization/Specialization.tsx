import type { ISpecialization } from '../../../interfaces';
import styles from './index.module.css';
interface Props {
  specialization: ISpecialization;
}

const Specialization: React.FC<Props> = ({ specialization }) => {
  return <li className={styles.specialization}>{specialization.title}</li>;
};

export default Specialization;
