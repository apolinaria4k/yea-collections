import MyTitle from '../MyTitle/MyTitle';
import Characteristic from '../Сharacteristic/Characteristic';
import classes from './index.module.css';

interface Props {
  complexity: number;
  rate: number;
}

const Levels: React.FC<Props> = ({ complexity, rate }) => {
  return (
    <div>
      <MyTitle title="Уровень:" />
      <div className={classes.wrapperCharacter}>
        <Characteristic title="Сложность" value={complexity}></Characteristic>
        <Characteristic title="Рейтинг" value={rate}></Characteristic>
      </div>
    </div>
  );
};

export default Levels;
