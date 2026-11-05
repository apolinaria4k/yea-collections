import styles from '../AllCollectionsAside/index.module.css';
import MyTitle from '../UI/MyTitle/MyTitle';

interface Props {
  title: string;
  isFree: boolean;
}

const PublicAccessBlock: React.FC<Props> = ({ title, isFree }) => {
  return (
    <>
      <div>
        <MyTitle title={title} />
        <div className={styles.variants}>
          <button className={styles.button}>{isFree ? 'Для всех' : 'Для участников'}</button>
        </div>
      </div>
    </>
  );
};

export default PublicAccessBlock;
