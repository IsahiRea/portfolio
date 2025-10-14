import profile from '../assets/img/dev-jane-01.jpg'

export default function Intro() {
    return (
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Cesar Rea</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">front-end dev</p>
            <img src={profile} alt="Jane Smith smiling" className='intro__img' />
        </section>  
    )
}
