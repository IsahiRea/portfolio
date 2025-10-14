import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer" id="contact">
            <a href="mailto:Isahi.Rea@live.com" className="footer__link">Isahi.rea@live.com</a> 
            <ul className="social-list">
                <li className="social-list__item">
                    <a href="https://www.linkedin.com/in/cesar-rea-705143320/" className="social-list__link" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li className="social-list__item">
                    <a href="https://x.com/CesarIRea1" className="social-list__link" target="_blank" rel="noreferrer">
                        <FaTwitter />
                    </a>
                </li>
                <li className="social-list__item">
                    <a href="https://github.com/IsahiRea" className="social-list__link" target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                </li>
            </ul>
        </footer>
    )
}