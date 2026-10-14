import styles from './index.module.css';

interface Props {
  isVisible: boolean;
}

export default function AllCollectionsAside({ isVisible }: Props) {
  return (
    <>
      <aside className={`${styles.aside} ${isVisible ? styles.visible : ''}`}>
        {/* <ButtonClose setIsVisible={setIsVisible}></ButtonClose>

        <div className={styles.innerWrapper}>
          <MyInput></MyInput>

          <SpecializationBlock
            title="Специализация"
            data={skillsAndSpec.specializations}
            setSpecializations={setSkillsAndSpec}
            totalSpec={totals.totalSpec}
          />
        </div> */}
      </aside>
    </>
  );
}
