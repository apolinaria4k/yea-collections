import classes from './index.module.css';
import type { FC } from 'react';

interface Props {
  title: string;
  value: number;
}
const Characteristic: FC<Props> = ({ title, value }) => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.text}>
        {title}: <span className={classes.value}>{value}</span>
      </p>
    </div>
  );
};

export default Characteristic;
