import styles from '../AllCollectionsAside/index.module.css';
import MyTitle from '../UI/MyTitle/MyTitle';

interface Props {
  title: string;
  company: string;
}

const CompanyBlock: React.FC<Props> = ({ title, company }) => {
  return (
    <>
      <div>
        <MyTitle title={title} />
        <div className={styles.variants}>
          <button className={styles.button}>{company}</button>
        </div>
      </div>
    </>
  );
};

export default CompanyBlock;
