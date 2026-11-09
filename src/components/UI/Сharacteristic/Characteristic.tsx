import classes from './index.module.css';

interface Props {
  title: string;
  value: number;
}
const Characteristic: React.FC<Props> = ({ title, value }) => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.text}>
        {title}: <span className={classes.value}>{value}</span>
      </p>
    </div>
  );
};

export default Characteristic;
