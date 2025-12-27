import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import '../styles/components/Footer.css';

export default function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="footer__content">
                <h2 className="footer__title">Let's Connect</h2>
                <p className="footer__availability">Currently seeking full-time opportunities | Remote or US-based</p>
                <a href="mailto:Isahi.Rea@live.com" className="footer__link">Isahi.rea@live.com</a>
                <ul className="social-list">
                    <li className="social-list__item">
                        <a
                            href="https://www.linkedin.com/in/cesar-rea-705143320/"
                            className="social-list__link"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn profile"
                        >
                            <FaLinkedin />
                        </a>
                    </li>
                    <li className="social-list__item">
                        <a
                            href="https://x.com/CesarIRea1"
                            className="social-list__link"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Twitter profile"
                        >
                            <FaTwitter />
                        </a>
                    </li>
                    <li className="social-list__item">
                        <a
                            href="https://github.com/IsahiRea"
                            className="social-list__link"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub profile"
                        >
                            <FaGithub />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}