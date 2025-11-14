import { HashLink } from 'react-router-hash-link'

export default function MyServices() {
    const services = [
        {
            title: "UI/UX Design",
            description: "I create intuitive designs using Figma, focusing on scalable design systems that ensure consistency. From wireframes to prototypes, I bring ideas to life with attention to accessibility and user research."
        },
        {
            title: "Front-end Development",
            description: "I build responsive, accessible React applications that work seamlessly across all devices. Clean, maintainable code following WCAG guidelines and modern best practices with TypeScript and React Query."
        },
        {
            title: "Back-end Development",
            description: "I develop secure Node.js APIs with Express, using SQL, Firebase, and Supabase. My solutions are scalable and efficient, focusing on seamless integration with front-end applications."
        }
    ]

    return (
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                {services.map((service, index) => (
                    <div className="service" key={index}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
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
