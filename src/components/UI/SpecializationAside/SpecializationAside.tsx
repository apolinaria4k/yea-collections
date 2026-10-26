import styles from './index.module.css';

interface Props {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const SpecializationAside: React.FC<Props> = ({ title, isActive, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className={isActive ? styles.activeButton : styles.button}>
        {title}
      </button>
    </div>
  );
};

export default SpecializationAside;
