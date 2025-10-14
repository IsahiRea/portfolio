import { HashLink } from 'react-router-hash-link'

export default function MyServices() {
    return (
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>Web Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.</p>
                </div>
                <div className="service">
                    <h3>Front-end Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.</p>
                </div>
                <div className="service">
                    <h3>Back-end Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.</p>
                </div>
            </div>

            <HashLink 
                to="/#work" 
                className="btn"
                smooth
            >
                My Work
            </HashLink>
        </section>
    )
}
