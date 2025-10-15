export default function AboutMe() {
    return (
        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Front-End Developer based in the US</p>
            <div className="about-me__body">
                <p>Hello! My name is Cesar Rea and I enjoy creating things that live on the internet. My interest in web development started years ago when I discovered the power of turning ideas into interactive experiences that anyone can access.</p>

                <p>I'm passionate about helping others bring their designs to life and creating user-friendly experiences. Whether it's building responsive websites, developing intuitive interfaces, or solving complex problems with clean code, I love the challenge of making the web more accessible and enjoyable for everyone.</p>

                <p>My approach combines technical expertise with an eye for detail, ensuring that every project not only works flawlessly but also provides an exceptional user experience. I believe in writing maintainable code, following best practices, and continuously learning new technologies to stay at the forefront of web development.</p>

                <p className="about-me__tech-intro">Here are a few technologies I've been working with recently:</p>

                <ul className="tech-list">
                    <li>JavaScript (ES6+)</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>HTML & CSS</li>
                </ul>
            </div>

            <img src="https://placehold.co/400x400/6c63ff/ffffff?text=About+Photo" alt="About me placeholder" className='about-me__img' />
        </section>
    )
}