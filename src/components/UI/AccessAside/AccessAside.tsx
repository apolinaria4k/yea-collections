import type { IAccess } from '../../../interfaces';
import styles from './index.module.css';
import type { FC } from 'react';
interface Props {
  access: IAccess;
  onClick: () => void;
  isActive: boolean;
}

const AccessAside: FC<Props> = ({ access, onClick, isActive }) => {
  return (
    <div>
      <button onClick={onClick} className={isActive ? styles.activeButton : styles.button}>
        {access.title}
      </button>
    </div>
  );
};

export default AccessAside;
