import styles from './index.module.css';
interface Props {
  keyword: string;
}

const Keyword: React.FC<Props> = ({ keyword }) => {
  return <li className={styles.keyword}>{keyword}</li>;
};

export default Keyword;
