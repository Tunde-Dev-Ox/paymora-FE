import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import {useLocation, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
const Success = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
    if (!location.state?.submitted) {
      navigate('/get-started');
    }
  }, [location, navigate]);
    return(
        <div className={styles.success}>
            <div className={styles.success_wrapper}>
                <h2>🎉 Thank you for signing up!</h2>
                <p>Our team will reach out to you within 24 hours to help you get started. No upfront fees, no hidden costs, no credit card required.</p>
                <Link to="/" className={styles.success_btn}>
                    Go to Home
                </Link>
            </div>
        </div>
    )
}

export default Success;