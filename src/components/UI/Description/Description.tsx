import styles from './index.module.css';

interface Props {
  description: string;
}

const Description: React.FC<Props> = ({ description }) => {
  return <p className={styles.description}>{description}</p>;
};

export default Description;
