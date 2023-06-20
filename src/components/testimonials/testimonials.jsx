import React from 'react'
import "./testimonials.css"
import Jbm from '../../assets/jbm.png'
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    avatar:Jbm,
    name:'JBM Group Intern',
    company:'Neel Metal Plant',
    review:'Learned about the functioning and manufacturing of welding fixtures.Done connection in FX-PLC for panel design and had a great experience there.'

  },
  // {
  //   avatar:HE,
  //   name:'Bill Ack',
  //   review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat labore deserunt nihil doloribus voluptatum mollitia commodi, corrupti incidunt tempora, accusamus cupiditate fugit dolorum officiis. Hic!'

  // },
  // {
  //   avatar:HE,
  //   name:'Bill Ack',
  //   review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat labore deserunt nihil doloribus voluptatum mollitia commodi, corrupti incidunt tempora, accusamus cupiditate fugit dolorum officiis. Hic!'

  // },
  // {
  //   avatar:HE,
  //   name:'Bill Ack',
  //   review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat labore deserunt nihil doloribus voluptatum mollitia commodi, corrupti incidunt tempora, accusamus cupiditate fugit dolorum officiis. Hic!'

  // }
]

const testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>Where I have worked</h5>
      <h2>Industrial Experience</h2>
      <Swiper className="container testimonial__container" modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}>
        {
          data.map(({avatar,name,company,review},index)=>{
            return(
              <SwiperSlide className='testimonial' key={index}>
          <div className="client__avatar">
            <img src={avatar} alt="" />
          </div>
            <h4 className='client__name'>{name}</h4>
            <h5>{company}</h5>
            <small className='client_review'>{review}</small>
        </SwiperSlide>

            )
            })
        }
      </Swiper>
    </section>
  )
}

export default testimonials