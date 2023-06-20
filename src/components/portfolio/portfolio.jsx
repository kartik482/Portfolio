import React from 'react'
import './portfolio.css'
import Proj1 from '../../assets/proj1.png'
import Proj2 from '../../assets/proj2.png'
import Proj3 from '../../assets/proj3.png'
import Proj4 from '../../assets/proj4.png'

const data =  [
  {
    id: 1,
    img: Proj1,
    title: 'Devs Library',
    github: 'https://github.com',
    demo: 'https://dribble.com'

  },
  {
    id: 2,
    img: Proj2,
    title: 'Blog Site',
    github: 'https://github.com/kartik482/Blog-site',
    demo: 'https://dribble.com'

  },
  {
    id: 3,
    img: Proj3,
    title: 'E-commerce web',
    github: 'https://github.com/kartik482/E-commerce-website',
    demo: 'https://dribble.com'

  },
  {
    id: 4,
    img: Proj4,
    title: 'Portfolio',
    github: 'https://github.com',
    demo: '/'

  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work </h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, img, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio__item-image">

                  <img src={img} alt="ME" />

                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn'>Github</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                </div>
              </article>
            )

          })
        }

      </div>
    </section>
  )
}

export default portfolio