import introImg from '../assets/img/intro-img.jpg';
import { HashLink } from 'react-router-hash-link';

export default function Intro() {
    return (
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Cesar Rea</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">Front-End Developer | React • JavaScript • Web Accessibility</p>
            <img src={introImg} alt="Cesar Rea, Front-End Developer specializing in React and modern JavaScript" className='intro__img' />
            <p className="intro__tagline">
                Building responsive, accessible web applications with React and modern JavaScript.
            </p>
            <div className="intro__cta">
                <HashLink to="/#work" className="btn btn--primary" smooth>
                    View My Work
                </HashLink>
                <a href="/Cesar_rea_resume.pdf" className="btn btn--secondary" download>
                    Download Resume
                </a>
                <HashLink to="/#contact" className="btn btn--secondary" smooth>
                    Get In Touch
                </HashLink>
            </div>
        </section>
    )
}
