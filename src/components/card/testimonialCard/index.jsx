import styles from './index.module.scss';
const TestimonialCard = ({src, quote, name, role, alt}) => {
    return(
        <div className={styles.testimonials_card}>
            <img src={src} alt={alt} />
            <p className={styles.testimonials_quote}>
                {quote}
            </p>
            <h3 className={styles.testimonials_name}>
                {name}
            </h3>
            <p className={styles.testimonials_position}>
                {role}
            </p>
        </div>
    )
}

export default TestimonialCard;