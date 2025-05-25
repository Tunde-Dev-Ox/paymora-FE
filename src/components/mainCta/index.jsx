import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';

const MainCta = () => {
    return(
        <section className={styles.main_cta}>
            <div className={styles.main_cta_wrapper}>
                <h2>
                    Get started with Paymora
                </h2>
                <p className={styles.main_cta_description}>
                    Book in a call with our team, who will walk you through the Paymora product and how it can benefit you and your customers.
                </p>
                <Link to="/get-started" className={styles.main_cta_btn}>
                    Get started
                    <IoIosArrowRoundForward />
                </Link>
            </div>
        </section>
    )
}

export default MainCta;