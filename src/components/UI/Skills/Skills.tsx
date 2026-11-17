import type { ISkill } from '../../../interfaces';
import MyTitle from '../MyTitle/MyTitle';
import SkillDetailedQuestion from '../SkillDetailedQuestion/SkillDetailedQuestion';
import styles from './index.module.css';

interface Props {
  questionSkills: ISkill[];
}

const Skills: React.FC<Props> = ({ questionSkills }) => {
  return (
    <div>
      <MyTitle title="Навыки:" />
      <div className={styles.variants}>
        {questionSkills.map((skill) => (
          <SkillDetailedQuestion key={skill.id} title={skill.title} id={skill.id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
