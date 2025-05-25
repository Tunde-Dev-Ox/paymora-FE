import styles from './index.module.scss';
import { BiChevronDown } from 'react-icons/bi';


const FaqBar = ({question, answer, onToggle, isActive}) => {
    return (
        <div className={styles.faq_questions__wrapper}>
        <button onClick={onToggle} type='button' className={styles.faq_question__button}>
           <p className={styles.faq_question}>
              {question}
           </p>
        <BiChevronDown className={`${styles.faq_icon} ${isActive ? styles.faq_active : ''}`} />
        </button>
           <p className={`${styles.faq_answer} ${isActive ? styles.faq_active : ''}`}>
              {answer}
           </p>
    </div>
    )
}

export default FaqBar;