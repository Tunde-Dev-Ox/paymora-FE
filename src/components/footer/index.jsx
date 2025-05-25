import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_wrapper}>
                <div className={styles.footer_link_container}>
                    <div className={styles.footer_ul_col}>
                        <h3 className={styles.footer_ul_col_title}>Product</h3>
                        <ul>
                            <li>
                                <a href="">
                                    Paymora AI
                                </a>
                            </li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#how-it-works">How It Works</a></li>
                            <li><a href="#use-cases">Use Cases</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                        </ul>
                    </div>
                    <div className={styles.footer_ul_col}>
                        <h3 className={styles.footer_ul_col_title}>Solutions</h3>
                        <ul>
                            <li><a href="#features">
                                Schools
                            </a></li>
                            <li><a href="#how-it-works">
                                Non-profit
                            </a></li>
                            <li><a href="#use-cases">
                                Corporate
                                </a>
                            </li>
                            <li><a href="#pricing">
                                Government
                                </a>
                            </li>
                            <li>
                                <a href="#pricing">
                                    SME
                                </a>
                            </li>
                            <li>
                                <a href="#pricing">
                                    Enterprise
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer_ul_col}>
                        <h3 className={styles.footer_ul_col_title}>
                            Company
                        </h3>
                        <ul>
                            <li><a href="#features">
                                About us
                            </a></li>
                            <li><a href="#how-it-works">
                                Careers
                            </a></li>
                            <li><a href="#pricing">
                                Press
                            </a></li>
                        </ul>
                    </div>
                    <div className={styles.footer_ul_col}>
                        <h3 className={styles.footer_ul_col_title}>
                            Resources
                        </h3>
                        <ul>
                            <li>
                                <a href="#features">
                                    What's new
                                </a>
                            </li>
                            <li><a href="#features">
                                Help Center
                            </a></li>
                            <li><a href="#how-it-works">
                                Pricing calculator
                            </a></li>
                            <li><a href="#use-cases">
                                Blog
                            </a></li>
                            <li>
                                <Link to="/why-paymora-for-schools">
                                    Why Paymora for Schools
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer_ul_col}>
                        <h3 className={styles.footer_ul_col_title}>
                            Legal
                        </h3>
                        <ul>
                            <li><a href="#features">
                                Terms of Service
                            </a></li>
                            <li><a href="#how-it-works">
                                Privacy Policy
                            </a></li>
                            <li><a href="#use-cases">
                                Cookie Policy
                            </a></li>
                            <li><a href="#pricing">
                                Security
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footer_bottom}>
                    <div className={styles.footer_bottom_left}>
                        <p>
                            © 2025 Paymora. All rights reserved.
                        </p>
                        <div className={styles.socials}>
                            <a href="https://www.facebook.com/paymora" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                            <a href="https://www.instagram.com/paymora/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://wa.me/2347011111111" target="_blank" rel="noopener noreferrer">
                                <FaTiktok />
                            </a>
                            <a href="https://wa.me/2347011111111" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                    <div className={styles.footer_bottom_right}>
                        <ul className={styles.footer_socials}>
                            <li>
                                <strong>Paymora is not a bank:</strong> Paymora is a financial technology platform designed specifically for schools, colleges, and educational institutions across Africa to streamline the process of school fee collection and management. We provide digital tools to make the experience of managing school payments easier, faster, and more transparent for school administrators and parents alike. However, it's important to clarify that we do not operate as a licensed financial institution or a deposit-taking bank. We do not hold or safeguard your money, offer banking services, or issue financial instruments like loans or credit. Instead, we partner with licensed payment processors to ensure that all transactions are completed securely and in compliance with financial regulations.
                            </li>
                            <li>
                                <strong>Transaction responsibility:</strong> While we facilitate fee payments between schools and parents through our secure platform, Paymora is not responsible for transactions that occur outside our ecosystem. If a school chooses to receive payment in cash or through another payment method that isn't integrated into our system, we have no control over that transaction, its record, or its integrity. For the best experience, we encourage all schools and parents to use the in-platform payment options for reliable tracking, instant receipts, and a seamless experience.
                            </li>
                            <li>
                                <strong>Secure payment processing:</strong> All payments on Paymora are processed through trusted third-party payment gateways that are licensed and regulated in the jurisdictions where we operate. These partners use advanced encryption and security protocols to protect every transaction. Paymora itself does not store or have access to any card numbers, CVVs, or PINs entered by users. By using the platform, you agree to comply with the security and privacy policies of these processors as part of the transaction process.
                            </li>
                            <li>
                                <strong>Transaction fees and charges:</strong> Paymora currently operates on a transaction-based pricing model. We charge 0.75% per transaction, capped at ₦500 per successful payment made through the platform. This fee covers the cost of payment processing, transaction tracking, SMS/email alerts, and the platform’s operational support. There are no setup fees, no monthly subscriptions, and no hidden charges. However, for large schools, enterprise plans, or special integrations, we may offer custom pricing which will be explicitly discussed and agreed upon with your institution.
                            </li>
                            <li>
                                <strong>Refunds and payment disputes:</strong> Paymora does not directly issue refunds. All refund requests must be initiated by the school and approved by their administrative team. Our role is to ensure that if a refund is authorized, it is processed through our payment partner back to the parent or payer. If you have a payment issue, you should contact your school first, followed by our support team who will liaise with both the school and the payment processor to resolve the matter.
                            </li>
                            <li>
                                <strong>Privacy and data security:</strong> We take data protection seriously. Paymora is fully committed to ensuring that your information is protected and handled in accordance with data privacy regulations such as the Nigeria Data Protection Regulation (NDPR) and global standards where applicable. Any data collected — such as student records, payment history, or contact details — is encrypted and used strictly for platform operations. We do not sell, rent, or misuse any data shared with us.
                            </li>
                            <li>
                                <strong>Use of the platform:</strong> By using Paymora, users (schools, staff, and parents) agree to abide by our platform rules and conduct. We reserve the right to suspend or terminate access to any account found violating our terms, attempting fraud, or abusing the system. We also continuously monitor platform usage to prevent any misuse or unethical activity.
                            </li>
                            <li>
                                <strong>Service availability:</strong> While we strive to maintain 99.9% uptime, Paymora may be unavailable from time to time due to system upgrades, server maintenance, or unexpected outages. We always work to resolve these issues as quickly as possible and minimize disruption to your operations. For any critical downtimes, affected users will be notified in advance (where possible) or as soon as the situation is under control.
                            </li>
                            <li>
                                <strong>Expansion and additional services:</strong> Although our core focus is school fee management, Paymora is evolving. Future offerings may include wallet services for parents, educational content purchases, savings for school fees, and insurance integrations. These features will be rolled out gradually and in full compliance with local laws. Updates to our services and terms will be communicated to all users.
                            </li>
                            <li>
                                <strong>Legal and regulatory compliance:</strong> Paymora works closely with regulatory bodies and legal advisors to ensure that our platform operates within the boundaries of law in every region we serve. We also comply with anti-money laundering (AML) and know-your-customer (KYC) standards where required.
                            </li>
                            <li>
                                <strong>Contact and support:</strong> For any concerns, suggestions, or support needs, please reach out to us via <a href="mailto:support@paymora.africa">support@paymora.africa</a>. Our customer success team typically responds within 24 hours. You can also follow our updates or reach out via our social media handles listed on the website.
                            </li>
                            <li>
                                <strong>Terms & Privacy:</strong> Your use of Paymora is governed by our <a href="/terms" target="_blank">Terms of Service</a> and <a href="/privacy" target="_blank">Privacy Policy</a>. These documents detail your rights, our responsibilities, and how your data is managed. We encourage all users to review them regularly as we update them in line with product improvements and regulatory changes.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;