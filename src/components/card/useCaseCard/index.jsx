import styles from './index.module.scss';
import { Link } from 'react-router-dom';
const UseCaseCard = ({ link, title, description, src, alt }) => {
    return(
        <Link to={link} className={styles.product_card}>
            <div className={styles.product_content}>
                <h3>
                    {title}
                </h3>
                <p>
                    {description}
                </p>
            </div>
            <div className={styles.product_card_image}>
                <img src={src} alt={alt} />
            </div>
            <div className={styles.product_overlay}></div>
        </Link>
    )
}

export default UseCaseCard;