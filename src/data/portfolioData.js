import portfolio01 from '../assets/img/portfolio-01.jpg'
import portfolio02 from '../assets/img/portfolio-02.jpg'
import portfolio03 from '../assets/img/portfolio-03.jpg'
import portfolio04 from '../assets/img/portfolio-04.jpg'
import portfolio05 from '../assets/img/portfolio-05.jpg'
import portfolio06 from '../assets/img/portfolio-06.jpg'
import portfolio07 from '../assets/img/portfolio-07.jpg'
import portfolio08 from '../assets/img/portfolio-08.jpg'
import portfolio09 from '../assets/img/portfolio-09.jpg'
import portfolio10 from '../assets/img/portfolio-10.jpg'

export const portfolioItems = [
  { id: 1, img: portfolio01, title: 'Project 1', description: 'Description for project 1', subtitle: 'front-end dev', sampleImg: '/src/assets/img/portfolio-details.jpg' },
  { id: 2, img: portfolio02, title: 'Project 2', description: 'Description for project 2', subtitle: 'front-end dev', sampleImg: '/src/assets/img/portfolio-details.jpg' },
  { id: 3, img: portfolio03, title: 'Project 3', description: 'Description for project 3', subtitle: 'front-end dev', sampleImg: '/src/assets/img/portfolio-details.jpg' },
  { id: 4, img: portfolio04, title: 'Project 4', description: 'Description for project 4', subtitle: 'front-end dev', sampleImg: '/src/assets/img/portfolio-details.jpg' },
  { id: 5, img: portfolio05, title: 'Project 5', description: 'Description for project 5', subtitle: 'front-end dev', sampleImg: '/src/assets/img/portfolio-details.jpg' },
  { id: 6, img: portfolio06, title: 'Project 6', description: 'Description for project 6', subtitle: 'front-end dev', sampleImg: '/src/assets/img/portfolio-details.jpg' },
  { id: 7, img: portfolio07, title: 'Project 7', description: 'Description for project 7', subtitle: 'front-end dev', sampleImg: '/src/assets/img/portfolio-details.jpg' },
  { id: 8, img: portfolio08, title: 'Project 8', description: 'Description for project 8', subtitle: 'front-end dev', sampleImg: '/src/assets/img/portfolio-details.jpg' },
  { id: 9, img: portfolio09, title: 'Project 9', description: 'Description for project 9', subtitle: 'front-end dev', sampleImg: '/src/assets/img/portfolio-details.jpg' },
  { id: 10, img: portfolio10, title: 'Project 10', description: 'Description for project 10', subtitle: 'front-end dev', sampleImg: '/src/assets/img/portfolio-details.jpg' },
]

export function getPortfolioItemById(id) {
  return portfolioItems.find(item => item.id === Number(id))
}