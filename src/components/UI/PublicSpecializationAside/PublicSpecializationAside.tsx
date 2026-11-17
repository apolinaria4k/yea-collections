import type { ISpecialization } from '../../../interfaces';
import styles from './index.module.css';

interface Props {
  specialization: ISpecialization;
}

const PublicSpecializationAside: React.FC<Props> = ({ specialization }) => {
  return (
    <div>
      <button className={styles.button}>{specialization.title}</button>
    </div>
  );
};

export default PublicSpecializationAside;
