import type { ISpecialization } from '../../interfaces';
import styles from '../AllCollectionsAside/index.module.css';
import MyTitle from '../UI/MyTitle/MyTitle';
import PublicSpecializationAside from '../UI/PublicSpecializationAside/PublicSpecializationAside';
import type { FC } from 'react';

interface Props {
  specializations: ISpecialization[];
  title: string;
}

const PublicSpecializationsBlock: FC<Props> = ({ title, specializations }) => {
  return (
    <>
      <div>
        <MyTitle title={title} />
        <div className={styles.variants}>
          {specializations.map((item) => (
            <PublicSpecializationAside key={item.id} specialization={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PublicSpecializationsBlock;
