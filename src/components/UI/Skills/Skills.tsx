import type { ISkill } from '../../../interfaces';
import MyTitle from '../MyTitle/MyTitle';
import SkillDetailedQuestion from '../SkillDetailedQuestion/SkillDetailedQuestion';
import styles from './index.module.css';
import type { FC } from 'react';

interface Props {
  questionSkills: ISkill[];
}

const Skills: FC<Props> = ({ questionSkills }) => {
  return (
    <div>
      <MyTitle title="Навыки:" />
      <div className={styles.variants}>
        {questionSkills.map((skill) => (
          <SkillDetailedQuestion key={skill.id} title={skill.title} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
