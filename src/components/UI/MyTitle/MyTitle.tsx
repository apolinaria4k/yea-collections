import styles from './index.module.css';

interface Props {
  title: string;
}

const MyTitle: React.FC<Props> = ({ title }) => {
  return <p className={styles.title}>{title}</p>;
};

export default MyTitle;
