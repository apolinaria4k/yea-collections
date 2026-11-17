import classes from './index.module.css';

interface Props {
  id: number;
  title: string;
}

const SkillDetailedQuestion: React.FC<Props> = ({ title }) => {
  return (
    <>
      <div className={classes.button}>{title}</div>
    </>
  );
};

export default SkillDetailedQuestion;
