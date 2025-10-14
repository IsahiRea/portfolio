import { useParams } from 'react-router-dom'
import { getPortfolioItemById } from '../data/portfolioData'

export default function PortfolioItem() {
  const { id } = useParams()
  const item = getPortfolioItemById(id)

  if (!item) return <div>Portfolio item not found.</div>

  return (
    <>
      <section className="intro">
        <h1 className="section__title section__title--intro">
          Project: <strong>{item.title}</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">front-end dev</p>
        <img src={item.img} alt={item.title} className='intro__img' />
      </section>  

      <div className='portfolio-item-individual'>
        <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
        <img src="/src/assets/img/portfolio-details.jpg" alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur incidunt?</p>
        <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
      </div>
    </>
  )
}