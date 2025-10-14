import image from '../assets/img/dev-jane-02.jpg'

export default function AboutMe() {
    return (
        <section className="about-me" id="about">
            <h2 className="section__title section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about">Designer and Devloper</p>
            <div className="about-me__body">
                <p>Hello! My name is Jane Doe and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                <p>Here are a few technologies I’ve been working with recently:</p>
            </div>

            <img src={image} alt="Jane leaning against a bus" className='about-me__img' />
        </section>
    )
}