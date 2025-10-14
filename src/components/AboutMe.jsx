import image from '../assets/img/dev-jane-02.jpg'

export default function AboutMe() {
    return (
        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            {/* TODO: Change from designer. I am not a designer */}
            <p className="section__subtitle section__subtitle--about">Designer and Developer</p>
            <div className="about-me__body">
                {/* TODO: Add a brief introduction */}
                <p>Hello! My name is Cesar Rea and I enjoy creating things that live on the internet.</p>
                {/* Talk about interests in helping others bring their designs to life */}
                <p>I’m passionate about helping others bring their designs to life and creating user-friendly experiences.</p>
                <p>Here are a few technologies I’ve been working with recently:</p>
                {/* TODO: Add a list of technologies */}
                {/* Technologies: Javascript, React, Node.js, Python, SQL */}
            </div>

            <img src={image} alt="Cesar leaning against a bus" className='about-me__img' />
        </section>
    )
}