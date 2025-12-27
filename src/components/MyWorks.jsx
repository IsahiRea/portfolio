import { Link } from 'react-router-dom'
import { getAllProjects } from '../utils/portfolioHelpers'
import '../styles/components/MyWorks.css'

export default function MyWorks() {
  const projects = getAllProjects()

  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">A selection of my range of work.</p>
      <div className="portfolio">
        {projects.map(project => (
          <Link to={`/portfolio/${project.slug}`} className="portfolio__item" key={project.id}>
            <img
              src={project.images.thumbnail}
              alt={project.title}
              className="portfolio__img"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}