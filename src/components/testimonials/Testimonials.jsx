import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {Pagination, Navigation} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const data = [
  {
    avatar: AVTR1,
    name:  "John Doe",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim magni cumque id dolores. Dolorum, labore ad. Corrupti cupiditate, perspiciatis dolor inventore laudantium quibusdam vero tempore magni! Tempore voluptatem officia tempora?"
  },
  {
    avatar: AVTR2,
    name:  "John Doe",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim magni cumque id dolores. Dolorum, labore ad. Corrupti cupiditate, perspiciatis dolor inventore laudantium quibusdam vero tempore magni! Tempore voluptatem officia tempora?"
  },
  {
    avatar: AVTR3,
    name:  "John Doe",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim magni cumque id dolores. Dolorum, labore ad. Corrupti cupiditate, perspiciatis dolor inventore laudantium quibusdam vero tempore magni! Tempore voluptatem officia tempora?"
  },
  {
    avatar: AVTR4,
    name:  "John Doe",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim magni cumque id dolores. Dolorum, labore ad. Corrupti cupiditate, perspiciatis dolor inventore laudantium quibusdam vero tempore magni! Tempore voluptatem officia tempora?"
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      Navigation
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) =>{
            return(
              <SwiperSlide className="testimonial" key={index}>
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
                
              </SwiperSlide>
            )
          })
        }

        
      </Swiper>
    </section>
  )
}

export default Testimonials