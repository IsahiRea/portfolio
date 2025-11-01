import aboutImg from '../assets/img/about-img.jpg';

export default function AboutMe() {
    return (
        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Front-End Developer based in the US</p>
            <div className="about-me__body">
                <p>I'm Cesar Rea, a Front-End Developer specializing in React and modern JavaScript frameworks. With a passion for creating accessible, performant web applications, I transform complex requirements into intuitive user experiences.</p>

                <p>My expertise spans the full development lifecycle—from collaborating with designers to implementing pixel-perfect responsive interfaces, optimizing performance, and ensuring WCAG compliance. I excel at solving complex problems with clean, maintainable code that follows industry best practices.</p>

                <p>Recent technical achievements include building a travel planning application with AI-powered recommendations processing 10,000+ API calls efficiently, and developing a full-featured marketplace with advanced React Router patterns and Firebase integration. I believe great code is well-tested, maintainable, and creates exceptional user experiences.</p>

                <p className="about-me__tech-intro">Technologies I work with:</p>

                <div className="tech-categories">
                    <div className="tech-category">
                        <h4 className="tech-category__title">Core</h4>
                        <ul className="tech-list">
                            <li>JavaScript (ES6+)</li>
                            <li>React</li>
                            <li>HTML & CSS</li>
                            <li>TypeScript</li>
                        </ul>
                    </div>
                    <div className="tech-category">
                        <h4 className="tech-category__title">Back-End</h4>
                        <ul className="tech-list">
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>RESTful APIs</li>
                            <li>SQL</li>
                            <li>Firebase</li>
                            <li>Supabase</li>
                        </ul>
                    </div>
                    <div className="tech-category">
                        <h4 className="tech-category__title">Tools & Practices</h4>
                        <ul className="tech-list">
                            <li>Git & GitHub</li>
                            <li>Vite</li>
                            <li>ESLint & Prettier</li>
                            <li>Vitest</li>
                            <li>React Query</li>
                            <li>Web Accessibility (WCAG)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <img src={aboutImg} alt="Cesar Rea working on web development projects" className='about-me__img' />
        </section>
    )
}