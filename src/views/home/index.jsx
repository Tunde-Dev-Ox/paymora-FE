import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import HomeHeader from '../../components/header/HomeHeader';
import Hero from '../../components/hero';
import UseCaseCard from '../../components/card/useCaseCard';
import FeaturesCard from '../../components/card/featuresCard';
import TestimonialCard from '../../components/card/testimonialCard';
import { CiLogin } from 'react-icons/ci';
import { SiInstructure } from 'react-icons/si';
import { CiLink } from 'react-icons/ci';
import { CiMoneyBill } from 'react-icons/ci';
import Faq from '../../components/faq';
import homeFaqs from '../../utils/faqData.js';
import { IoIosArrowRoundForward } from 'react-icons/io';
import MainCta from '../../components/mainCta/index.jsx';
import { FaT } from 'react-icons/fa6';
import Footer from '../../components/footer/index.jsx';

const Home = () => {
    return(
        <>
            <HomeHeader />
            <main className={styles.main}>
                 <Hero />
                 <section className={styles.saves_time}>
                    <div className={styles.saves_time_wrapper}>
                        <h2>
                            Simplify how you track school fees
                        </h2>
                        <p className={styles.saves_time_description}>
                            Paymora makes it easy to collect tuition fees, manage students records, and get your financial data analysis in one place.
                        </p>
                        <div className={styles.saves_time_card_wrapper}>
                            <div className={styles.saves_time_card}>
                                <h3>
                                    40%
                                </h3>
                                <p>
                                    improves collection rates
                                </p>
                            </div>
                            <div className={styles.saves_time_card}>
                                <h3>
                                    8hrs
                                </h3>
                                <p>
                                    saves time on admin tasks
                                </p>
                            </div>
                            <div className={styles.saves_time_card}>
                                <h3>
                                    10min
                                </h3>
                                <p>
                                    to set up your school
                                </p>
                            </div>
                        </div>
                    </div>
                 </section>
                 <section className={styles.product}>
                    <div className={styles.product_wrapper}>
                        <h2>
                            Built for schools
                        </h2>
                        <p className={styles.product_description}>
                            Whether you're running the school or paying the fees — we’ve got you covered.
                        </p>
                        <div className={styles.product_card_wrapper}>
                            <UseCaseCard 
                                link="/"
                                title="School owners"
                                description="Track revenue, automate collections, and get full visibility into your school’s income."
                                src="https://images.pexels.com/photos/7821936/pexels-photo-7821936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="school owners"
                            />
                            <UseCaseCard
                                link="/"
                                title="Accountants"
                                description="Reconcile transactions in seconds. No more spreadsheets, no more stress."
                                src="https://images.pexels.com/photos/5900131/pexels-photo-5900131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="bursars"
                            />
                            <UseCaseCard
                                link="/"
                                title="Parents"
                                description="Pay from anywhere, on your terms. Get receipts and history automatically."
                                src="https://images.pexels.com/photos/3820203/pexels-photo-3820203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="parents"
                            />
                            <UseCaseCard
                                link="/"
                                title="Head teachers"
                                description="Monitor payment status by class. Make informed decisions with real-time data."
                                src="https://images.pexels.com/photos/5905484/pexels-photo-5905484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="head teachers"
                            />
                        </div>
                    </div>
                 </section>
                 <section className={styles.features}>
                    <div className={styles.features_wrapper}>
                        <h2>
                            Features
                        </h2>
                        <p className={styles.features_description}>
                            The best in class tools to help you save time and money.
                        </p>
                        <div className={styles.features_card_wrapper}>
                            <FeaturesCard 
                                title="Smart fee collection"
                                description="Collect school fees digitally and securely, with instant updates on who has paid and who hasn’t."
                                src="/payment.svg"
                                alt="payment"
                            />
                            <FeaturesCard
                                title="Flexible installments"
                                description="Let parents pay in parts without complicating your accounting."
                                src="/installment.svg"
                                alt="installment"
                            />
                            <FeaturesCard
                                title="Instant receipts"
                                description="Every payment is tracked, stored, and receipted — no paper needed."
                                src="/receipt.svg"
                                alt="receipt"
                            />
                            <FeaturesCard
                                title="Automated reminders"
                                description="Stop chasing people. The system does it for you."
                                src="/reminder.svg"
                                alt="reminder"
                            />
                            <FeaturesCard
                                title="AI powered analytics"
                                description="Get insights into your school’s income and expenses. No more manual reports."
                                src="/analytics.svg"
                                alt="analytics"
                            />
                            <FeaturesCard
                                title="Transaction dashboard"
                                description="Know everything at a glance from your personalized dashboard."
                                src="/dashboard.svg"
                                alt="dashboard"
                            />
                            <FeaturesCard
                                title="Branded page"
                                description="Get your own branded payment page to collect fees. No more third party links."
                                src="/page.svg"
                                alt="page"
                            />
                            <FeaturesCard
                                title="Secure & compliant"
                                description="We are PCI compliant and use bank-level encryption to keep your data safe."
                                src="/security.svg"
                                alt="security"
                            />
                        </div>
                    </div>
                 </section>
                 <section className={styles.testimonials}>
                    <div className={styles.testimonials_wrapper}>
                        <h2>
                            Loved by hundreds of schools
                        </h2>
                        <p className={styles.testimonials_description}>
                            We are trusted by schools across Nigeria.
                        </p>
                        <div className={styles.testimonials_card_wrapper}>
                            <TestimonialCard 
                                src="https://usetola.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffreelancecfo-crop.5604b6a5.webp&w=640&q=75"
                                quote="Paymora has made it easy for us to collect fees and manage our finances."
                                name="Emma Okafor"
                                role="Head Teacher, ABC School"
                                alt="testimonial"
                            />
                            <TestimonialCard
                                src="https://usetola.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fofftrack-crop.16a1c707.webp&w=640&q=75"
                                quote="The platform is user-friendly and has saved us a lot of time."
                                name="Anu Ogunleye"
                                role="Accountant, XYZ School"
                                alt="testimonial"
                            />
                            <TestimonialCard
                                src="https://usetola.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftritonsensors.87759fef.webp&w=640&q=75"
                                quote="I love the automated reminders. It has made my life so much easier."
                                name="Chuka Nwosu"
                                role="Parent, DEF School"
                                alt="testimonial"
                            />
                        </div>
                    </div>
                 </section>
                 <section className={styles.steps}>
                    <div className={styles.steps_wrapper}>
                        <h2>
                            At a glance
                        </h2>
                        <div className={styles.steps_card_wrapper}>
                            <div className={styles.steps_btns}>
                                <button>
                                    <CiLogin />
                                    <span>
                                    Sign up
                                    </span>
                                </button>
                                <button>
                                    <SiInstructure />
                                    <span>
                                    Fee structure
                                    </span>
                                </button>
                                <button>
                                    <CiLink />
                                    <span>
                                    Payment link
                                    </span>
                                </button>
                                <button>
                                    <CiMoneyBill />
                                    <span>
                                    Collect fees
                                    </span>
                                </button>
                            </div>
                            <div className={styles.steps_image}>
                                <img src="https://usetola.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservices.cfd2f588.webp&w=1920&q=75" alt="steps" />
                            </div>
                        </div>
                    </div>
                 </section>
                 <section className={styles.faq}>
                 <div className={styles.faq_wrapper}>
                    <h2>
                        FAQ
                    </h2>
                    <div className={styles.faq__bars__wrapper}>
                        <div className={styles.faq__bar}>
                           <Faq 
                            faqData={homeFaqs}
                           />
                        </div>
                    </div>
                </div>
                 </section>
                 <MainCta />
                 <Footer />
            </main>
        </>
    )
}

export default Home;