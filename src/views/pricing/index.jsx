import HomeHeader from "../../components/header/HomeHeader";
import MainCta from "../../components/mainCta";
import Home from "../home";
import Footer from "../../components/footer";
import styles from './index.module.scss';

const Pricing = () => {
    return (
        <>
            <HomeHeader />
            <div className={styles.pricing}>
                <div className={styles.pricing_wrapper}>
                    <h1>
                        Plans for all businesses
                    </h1>
                    <p className={styles.pricing_description}>
                        Our pricing is transparent and affordable, with no hidden fees or surprises. We offer a free plan for individuals and small businesses to get started with Paymora. All plans include access to our full suite of features, including payment processing, invoicing, AI analytics, and reporting.
                    </p>
                    <ul className={styles.pricing_plans}>
                        <li className={styles.pricing_plan}>
                            <p>
                                0.75% per transaction, capped at ₦500
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <MainCta />
            <Footer />
        </>
    );
}

export default Pricing;