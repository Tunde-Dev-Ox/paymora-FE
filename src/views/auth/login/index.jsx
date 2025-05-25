import styles from './index.module.scss';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.login_wrapper}>
                <h2 className={styles.login_title}>
                    Sign in to your account
                </h2>
                <form className={styles.login_form}>
                    <div className={styles.login_form_group}>
                        <label htmlFor='email'>Email</label>
                        <input type="email" id="email" required placeholder='name@work-email.com'/>
                    </div>
                    <div className={styles.login_form_group}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder='***********' required />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
             <Link to="/" className={styles.login_close}>
                <img src="/cancel.svg" alt="Close" />
            </Link>
        </div>
    )
}

export default Login;