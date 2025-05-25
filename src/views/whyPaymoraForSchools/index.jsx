import styles from './index.module.scss';
import MobileHeader from "../../components/header/HomeHeader";
import MainCta from "../../components/mainCta";
import Footer from "../../components/footer";


const WhyPaymoraForSchools = () => {
    return(
        <>
            <MobileHeader />
            <div className={styles.why_paymora_for_schools}>
                <div className={styles.why_paymora_for_schools_wrapper}>
                    <h1>
                        Why Paymora for Schools?
                    </h1>
                    <p className={styles.why_paymora_for_schools_description}>
                        The only payment platform tailor made for schools and educational institutions.
                    </p>
                    <img src="https://images.unsplash.com/photo-1579651745194-ff4b0f1580d0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className={styles.why_paymora_for_schools_main_content}>
                        <h2>
                            1. No more paper trails and lost receipts
                        </h2>
                        <p>
                            Cash is hard to track. Paper gets lost. Excel can't send reminders. With Paymora, every payment is:
                        </p>
                        <ul>
                            <li>
                                Logged in real time
                            </li>
                            <li>
                                Linked to each student
                            </li>
                            <li>
                                Backed by a digital receipt
                            </li>
                            <li>
                                Always available in your dashboard
                            </li>
                        </ul>
                        <h2>
                            2. Your parents want convenience
                        </h2>
                        <p>
                            Today’s parents expect digital ease.
                            Paymora lets them:
                        </p>
                        <ul>
                            <li>
                                Pay from their phones
                            </li>
                            <li>
                                Get automatic reminders
                            </li>
                            <li>
                                Choose installment plans
                            </li>
                            <li>
                                Download receipts on demand
                            </li>
                        </ul>
                        <h2>
                            3. You’re leaving money on the table
                        </h2>
                        <p>
                            Manual fee collection means leaks.
                            Paymora helps you fix that with:
                        </p>
                        <ul>
                            <li>
                                Automated reminders
                            </li>
                            <li>
                                Payment links
                            </li>
                            <li>
                                Real time dashboard
                            </li>
                        </ul>
                        <h2>
                            4. Free up your team’s time
                        </h2>
                        <p>
                            Admin teams are buried in routine work.
                            Paymora handles the repetitive stuff so your staff can focus on:
                        </p>
                        <ul>
                            <li>
                                Managing academics
                            </li>
                            <li>
                                Improving student experience
                            </li>
                            <li>
                                Growing enrollment
                            </li>
                        </ul>
                        <h2>
                            5. Trust through transparency
                        </h2>
                        <p>
                            Parents love systems.
                            With Paymora, they always know:
                        </p>
                        <ul>
                            <li>
                                How much they owe
                            </li>
                            <li>
                                When they paid
                            </li>
                            <li>
                                What it covered
                            </li>
                        </ul>
                        <h2>
                            6. Every naira is accounted for
                        </h2>
                        <p>
                            You can’t grow without tracking your income.
                            Paymora ensures:
                        </p>
                        <ul>
                            <li>
                                Every payment is logged
                            </li>
                            <li>
                                Financial reports are real-time
                            </li>
                            <li>
                                Your finance team sees the full picture
                            </li>
                        </ul>
                        <h2>
                            7. Built for Africa, not adapted from abroad
                        </h2>
                        <p>
                            We know the African market.
                            Paymora is built for schools in Africa, not adapted from abroad.
                        </p>
                        <ul>
                            <li>
                                Mobile-first experience
                            </li>
                            <li>
                                Works with spotty internet
                            </li>
                            <li>
                                Built for African school systems
                            </li>
                            <li>
                                Local team, local support
                            </li>
                        </ul>
                        <h2>
                            8. Beyond school fees
                        </h2>
                        <p>
                            Paymora already helps schools collect:
                        </p>
                        <ul>
                            <li>
                                Uniform and book fees
                            </li>
                            <li>
                                PTA dues
                            </li>
                            <li>
                                Boarding and transport fees
                            </li>
                            <li>
                                Exam levies
                            </li>
                            <li>
                               Extracurricular fees
                            </li>
                        </ul>
                        <h2>
                            9. Coming Soon: Revenue Intelligence
                        </h2>
                        <p>
                            Imagine knowing:
                        </p>
                        <ul>
                            <li>
                                The most delayed classes or parents
                            </li>
                            <li>
                                Projected cashflow for the term
                            </li>
                            <li>
                                How your school compares with others in your area
                            </li>
                            <li>
                                Predictive analytics on fee collection
                            </li>
                            <li>
                               Performance benchmarking
                            </li>
                            <li>
                               Growth suggestions tailored to your school’s data
                            </li>
                        </ul>
                         <h2>
                            10. Coming Soon: AI for Smarter School Finance
                        </h2>
                        <p>
                            We’re building AI tools to help you:
                        </p>
                        <ul>
                            <li>
                                Predict late payments before they happen
                            </li>
                            <li>
                                Automatically follow up with the right tone and timing
                            </li>
                            <li>
                                Get smart suggestions on when to offer discounts or flexible plans
                            </li>
                            <li>
                                Generate customized financial reports with one click
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <MainCta />
            <Footer />
        </>
    )
}

export default WhyPaymoraForSchools;