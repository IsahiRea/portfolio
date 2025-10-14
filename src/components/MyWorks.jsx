import { Link } from 'react-router-dom'
import { portfolioItems } from '../data/portfolioData'

export default function MyWorks() {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">A selection of my range of work.</p>
      <div className="portfolio">
        {portfolioItems.map(item => (
          <Link to={`/portfolio/${item.id}`} className="portfolio__item" key={item.id}>
            <img src={item.img} alt={item.title} className="portfolio__img" />
          </Link>
        ))}
      </div>
    </section>
  )
}