import type { ICollection } from '../../interfaces';
import PublicAccessBlock from '../PublicAccessBlock/PublicAccessBlock';
import PublicSpecializationsBlock from '../PublicSpecializationsBlock/PublicSpecializationsBlock';
import ButtonClose from '../UI/ButtonClose/ButtonClose';
import styles from './index.module.css';
import GuruProfile from '../GuruProfile/GuruProfile';
import CompanyBlock from '../CompanyBlock/CompanyBlock';
import CountQuestionsBlock from '../CountQuestionsBlock/CountQuestionsBlock';
import KeyWordsDetails from '../UI/KeyWordsDetails/KeyWordsDetails';
import SubscribeBlock from '../UI/SubscribeBlock/SubscribeBlock';

interface Props {
  collection: ICollection | undefined;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const PublicCollectionsAside: React.FC<Props> = ({ collection, isVisible, setIsVisible }) => {
  console.log(collection);

  return (
    <>
      <aside className={`${styles.aside} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.blockWrapper}>
          <div className={styles.blockInner}>
            <ButtonClose setIsVisible={setIsVisible} />
            {!collection ? (
              <h1>Загрузка...</h1>
            ) : (
              <div className={styles.innerWrapper}>
                <PublicSpecializationsBlock
                  title="Специализация"
                  specializations={collection.specializations}
                />
                <CompanyBlock
                  title="Компания"
                  company={collection.company?.title || collection.title}
                />

                <CountQuestionsBlock title="Количество вопросов" collection={collection} />

                <PublicAccessBlock title="Доступ" isFree={collection.isFree} />

                <KeyWordsDetails keywords={collection.keywords}></KeyWordsDetails>

                <div>
                  <p className={styles.author}>
                    Автор: <span className={styles.authorColor}>Дмитрий Мусиенко</span>
                  </p>
                </div>

                <SubscribeBlock />
              </div>
            )}
          </div>
        </div>

        <div className={`${styles.blockWrapper} ${styles.border}`}>
          <GuruProfile />
        </div>
      </aside>
    </>
  );
};

export default PublicCollectionsAside;
