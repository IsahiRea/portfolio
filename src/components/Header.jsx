import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import '../styles/components/Header.css'

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);

    const handleToggle = () => {
        setNavOpen(!navOpen);
        document.body.classList.toggle('nav-open', !navOpen);
    };

    const handleLinkClick = () => {
        setNavOpen(false);
        document.body.classList.remove('nav-open');
    };

    return (
        <header>
            <div className="logo">
                <span className="logo__text">&lt;Cesar Rea&gt;</span>
            </div>
            <button
                className="nav-toggle"
                aria-label="toggle navigation"
                onClick={handleToggle}
            >
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <HashLink 
                            to="/" 
                            className="nav__link" 
                            smooth
                            onClick={handleLinkClick}
                        >
                            Home
                        </HashLink>
                    </li>
                    <li className="nav__item">
                        <HashLink 
                            to="/#services" 
                            className="nav__link" 
                            smooth
                            onClick={handleLinkClick}
                        >
                            My Services
                        </HashLink>
                    </li>
                    <li className="nav__item">
                        <HashLink 
                            to="/#about" 
                            className="nav__link" 
                            smooth
                            onClick={handleLinkClick}
                        >
                            About me
                        </HashLink>
                    </li>
                    <li className="nav__item">
                        <HashLink 
                            to="/#work" 
                            className="nav__link" 
                            smooth
                            onClick={handleLinkClick}
                        >
                            My Work
                        </HashLink>
                    </li>
                    <li className="nav__item">
                        <HashLink
                            to="/#contact"
                            className="nav__link"
                            smooth
                            onClick={handleLinkClick}
                        >
                            Contact
                        </HashLink>
                    </li>
                    <li className="nav__item">
                        <a
                            href="/Cesar_rea_resume.pdf"
                            className="nav__link nav__link--resume"
                            download
                            onClick={handleLinkClick}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}