import type { ISpecialization } from '../../interfaces';
import styles from '../AllCollectionsAside/index.module.css';
import MyTitle from '../UI/MyTitle/MyTitle';
import SpecializationAside from '../UI/SpecializationAside/SpecializationAside';

interface Props {
  specializations: ISpecialization[];
  title: string;
}

const PublicSpecializationsBlock: React.FC<Props> = ({ title, specializations }) => {
  return (
    <>
      <div>
        <MyTitle title={title} />
        <div className={styles.variants}>
          {specializations.map((item) => (
            <SpecializationAside key={item.id} specialization={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PublicSpecializationsBlock;
