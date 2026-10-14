import styles from './index.module.css';

export default function CollectionItem() {
  return (
    <li className={styles.item}>
      {/* <div className={styles.wrapper}>
        <p className={styles.text}>{title}</p>
        <ButtonArrowDown isVisible={isVisible} handleClick={handleClick}></ButtonArrowDown>
      </div>
      {isVisible && (
        <AnswerInItem id={id} rate={rate} complexity={complexity} shortAnswer={shortAnswer} />
      )} */}
    </li>
  );
}
