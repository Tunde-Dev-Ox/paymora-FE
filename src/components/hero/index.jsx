import styles from './index.module.scss'
import {Link} from 'react-router-dom'
const Hero = () => {
    return (
        <section className={styles.hero}>
                    <div className={styles.hero_wrapper}>
                    <div className={styles.hero_content}>
                        <h1 className={styles.hero_title}>
                            Collect tuition fees, the smart way.
                        </h1>
                        <p className={styles.hero_description}>
                            Paymora helps schools send fee reminders, accept payments, and manage financial records all in one place.
                        </p>
                        <div className={styles.hero_buttons}>
                            <Link to="/get-started" className={styles.hero_demo}>
                                Get started
                            </Link>
                            <Link to="/login" className={styles.hero_learn_more}>
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className={styles.hero_image}>
                        <img src="https://usetola.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservices.cfd2f588.webp&w=1920&q=75" alt="Hero" />
                        <img src="https://images.unsplash.com/photo-1714646793092-628dfded3ac1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero" />
                    </div>
                    <div className={styles.hero_note}>
                        <p>
                            Supports multiple payment platforms in Nigeria—Paystack, Flutterwave, Bank transactions, and many more. 
                        </p>
                    </div>
                    </div>
        </section>
    )
}

export default Hero;