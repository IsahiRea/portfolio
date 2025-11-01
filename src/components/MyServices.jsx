import { HashLink } from 'react-router-hash-link'
import webDesignIcon from '../assets/icons/web-design-icon.svg'
import frontendIcon from '../assets/icons/frontend-icon.svg'
import backendIcon from '../assets/icons/backend-icon.svg'

export default function MyServices() {
    const services = [
        {
            icon: webDesignIcon,
            title: "UI/UX Design",
            description: "I create intuitive and visually appealing designs using modern tools like Figma. My approach focuses on building scalable design systems that ensure consistency across all touchpoints while maintaining flexibility for future growth. From wireframes to high-fidelity prototypes, I bring ideas to life with attention to detail, user research, and accessibility-first principles."
        },
        {
            icon: frontendIcon,
            title: "Front-end Development",
            description: "Specializing in React and modern JavaScript frameworks, I build responsive, accessible web applications that work seamlessly across all devices. I prioritize clean, maintainable code and follow WCAG accessibility guidelines to ensure everyone can use the applications I create. Performance optimization and user experience are at the core of every project, with expertise in TypeScript, React Query, and modern testing practices using Vitest."
        },
        {
            icon: backendIcon,
            title: "Back-end Development",
            description: "I develop robust server-side applications using Node.js and Express, creating RESTful APIs that power dynamic web experiences. My backend solutions are secure, scalable, and efficient, with expertise in database technologies (SQL, Firebase, Supabase), authentication/security best practices, API design patterns, and thorough testing. I focus on seamless integration with front-end applications to deliver complete full-stack solutions."
        }
    ]

    return (
        <section className="my-services" id="services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                {services.map((service, index) => (
                    <div className="service" key={index}>
                        <div className="service__icon-container">
                            <img src={service.icon} alt="" className="service__icon" aria-hidden="true" />
                        </div>
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
