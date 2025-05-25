import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';

const HomeHeader = () => {
    return (
        <header>
                <div className={styles.header_wrapper}>
                    <Link to="/" className={styles.logo}>
                        <span>
                            Paymora
                        </span>
                    </Link>
                    <nav>
                       <ul className={styles.nav_links}>
                            <Link to="/features" className={styles.nav_link}>
                                Features
                            </Link>
                            <Link to="/use-cases" className={styles.nav_link}>
                                Use Cases
                            </Link>
                            <Link to="/pricing" className={styles.nav_link}>
                                Pricing
                            </Link>
                            <Link to="/blog" className={styles.nav_link}>
                                Blog
                            </Link>
                            <Link to="/about" className={styles.nav_link}>
                                About
                            </Link>
                        </ul>
                    </nav>
                    <div className={styles.auth_buttons}>
                        <Link to="/auth/login" className={styles.login}>
                            Login
                        </Link>
                        <Link to="/get-started" className={styles.demo}>
                            Get started
                            <IoIosArrowRoundForward />
                        </Link>
                    </div>
                    <div className={styles.hamburger}>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </div>
                </div>
        </header>
    );
}

export default HomeHeader;