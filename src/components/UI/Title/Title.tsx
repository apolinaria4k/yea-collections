import styles from './index.module.css';

interface Props {
  title: string;
}

const Title: React.FC<Props> = ({ title }) => {
  return <p className={styles.title}>{title}</p>;
};

export default Title;
