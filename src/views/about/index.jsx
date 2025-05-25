import styles from './index.module.scss';
import MobileHeader from "../../components/header/HomeHeader";
import MainCta from "../../components/mainCta";
import Footer from "../../components/footer";

const About = () => {
    return(
        <>
            <MobileHeader />
            <div className={styles.about}>
                <div className={styles.about__wrapper}>
                    <h1>
                        We are helping institutions go cashless
                    </h1>
                    <p className={styles.about__description}>
                        We are a team of builders who are passionate about technology and product innovation.
                    </p>
                    <img src="https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <p className={styles.about_main_description}>
                        For so many years, institutions like schools, churches, SMEs, and other organizations have been using cash to collect payments. This has led to a lot of issues, such as loss of money, lack of accountability, and difficulty in tracking payments.<br /><br />
                        Till now, many of these institutions are still managing their finance manually — leaving little or no room for proper auditing and data analysis. This is where Paymora comes in.<br /><br />
                        Paymora is a payment management platform that helps institutions collect payments online. We provide a simple and easy way for institutions to collect payments from their customers, track their finances, and manage their data. In other words, we help institutions go cashless and make their payment processes more efficient — providing them robust features and tools to proper manage and track finance. Something that will take a full team of accountants to do manually.<br /><br />
                        Paymora's mission is to help institutions thrive by providing them with the tools they need to succeed, leaving them to focus on what they do best — serving customers and growing their business.
                    </p>
                </div>
            </div>
            <MainCta />
            <Footer />
        </>
    )
}

export default About;