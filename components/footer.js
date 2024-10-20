import Image from 'next/image';
import visa from '../public/images/visa.svg'
import mastercard from '../public/images/master-card.svg'
import americanExpress from '../public/images/american-express.svg'
import discover from '../public/images/discover.svg'
import diners from '../public/images/diners.svg'
import paypal from '../public/images/paypal.svg'
import footerBG from '../public/images/footerbg.png'
import siteLogo from '../public/images/site-logo.svg'
import facebook from '../public/images/facebook.svg'
import insta from '../public/images/insta.svg'
import youtube from '../public/images/youtube.svg'
import xLogo from '../public/images/x-logo.svg'

export default function Footer() {
    return (
        <footer className="site-footer relative">
             <Image src={footerBG} alt="footerBG" className='bg-img'/>
            <div className="container">
                <div className="footer-top">
                    <div className="logo-wrapper">
                        <div className="logo-block">
                            <a href="/">
                                <Image src={siteLogo} alt="Triqunch" />
                            </a>
                        </div>
                        <div className="social-media-wrapper">
                            <span className="title">
                                Follow Us
                            </span>
                            <ul className='d-flex'>
                                <li>
                                    <a href="" title="facebook">
                                        <Image src={facebook} alt="facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="" title="Instagram">
                                        <Image src={insta} alt="insta" />
                                    </a>
                                </li>
                                <li>
                                    <a href="" title="Youtube">
                                        <Image src={youtube} alt="youtube" />
                                    </a>
                                </li>
                                <li>
                                    <a href="" title="X">
                                        <Image src={xLogo} alt="X" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="links-wrapper">
                        <div className="link-inner">
                            <div className="links-inner-wrapper">
                                <span className="footer-title">
                                Categories
                                </span>
                                <ul>
                                    <li>
                                        <a href="" title="Spindle Motor ATC">Spindle Motor ATC</a>
                                    </li>
                                    <li>
                                        <a href="" title="Spindle Motor MTC">Spindle Motor MTC</a>
                                    </li>
                                    <li>
                                        <a href="" title="VFD">VFD</a>
                                    </li>
                                    <li>
                                        <a href="" title="Spindle Bearing">Spindle Bearing</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="links-inner-wrapper">
                                <span className="footer-title">
                                Quick links
                                </span>
                                <ul>
                                    <li>
                                        <a href="" title="Home">Home</a>
                                    </li>
                                    <li>
                                        <a href="" title="Categories">Categories</a>
                                    </li>
                                    <li>
                                        <a href="" title="Contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="links-inner-wrapper">
                                <span className="footer-title">
                                Policy
                                </span>
                                <ul>
                                    <li>
                                        <a href="" title="Privacy policy">Privacy policy</a>
                                    </li>
                                    <li>
                                        <a href="" title="Refund policy">Refund policy</a>
                                    </li>
                                    <li>
                                        <a href="" title="Terms of service">Terms of service</a>
                                    </li>
                                    <li>
                                        <a href="" title="Contact information">Contact information</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-contact-wrapper">
                        <span className="contact-title">
                        Contact Us
                        </span>
                        <a href="mailto:support@triquench.com" title="Mail Us">support@triquench.com</a>
                        <a href="tel:+91898783678" title="Call Us">+91 89878 3678</a>
                    </div>
                </div>
                <div className="footer-bottom d-flex align-center justify-sb">
                    <div className="left">
                        © <span className="year">2024</span>, Triquench India PVT. LTD.
                    </div>
                    <div className="right">
                        <ul className="d-flex align-center">
                            <li>
                                <Image src={visa} alt="visa" />
                            </li>
                            <li>
                                <Image src={diners} alt="diners" />
                            </li>
                            <li>
                                <Image src={mastercard} alt="mastercard" />
                            </li>
                            <li>
                                <Image src={americanExpress} alt="americanExpress" />
                            </li>
                            <li>
                                <Image src={discover} alt="discover" />
                            </li>
                            <li>
                                <Image src={paypal} alt="paypal" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}