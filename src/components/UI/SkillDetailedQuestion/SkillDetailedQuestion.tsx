import classes from './index.module.css';
import type { FC } from 'react';

interface Props {
  title: string;
}

const SkillDetailedQuestion: FC<Props> = ({ title }) => {
  return (
    <>
      <div className={classes.button}>{title}</div>
    </>
  );
};

export default SkillDetailedQuestion;
