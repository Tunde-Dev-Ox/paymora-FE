import styles from './index.module.scss';

const FeaturesCard = ({title, description, src, alt}) => {
    return (
        <div className={styles.features_card}>
            <div className={styles.features_content}>
            <h3>
                {title}
            </h3>
            <p>
                {description}
            </p>
            </div>
            <div className={styles.features_picture}>
                <img src={src} alt={alt} />
            </div>
        </div>
    );
}

export default FeaturesCard;