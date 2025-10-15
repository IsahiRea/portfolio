import { Link } from 'react-router-dom'
import { getAllProjects } from '../utils/portfolioHelpers'
import portfolio01 from '../assets/img/portfolio-01.jpg'
import portfolio02 from '../assets/img/portfolio-02.jpg'
import portfolio03 from '../assets/img/portfolio-03.jpg'

export default function MyWorks() {
  const projects = getAllProjects()

  // Map image imports to project IDs
  const imageMap = {
    'project-1': portfolio01,
    'project-2': portfolio02,
    'project-3': portfolio03
  }

  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">A selection of my range of work.</p>
      <div className="portfolio">
        {projects.map(project => (
          <Link to={`/portfolio/${project.slug}`} className="portfolio__item" key={project.id}>
            <img
              src={imageMap[project.id]}
              alt={project.title}
              className="portfolio__img"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}