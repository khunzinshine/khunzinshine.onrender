import './Portfolio.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Data } from './Data';
// import required modules
import { Pagination } from 'swiper';
import React from 'react';

// Import Swiper styles

const Portfolio = () => {
  return (
    <section className='portfolio container section' id='portfolio'>
      <h2 className='section__title'>Portfolio</h2>
      <span className='section__subtitle'>My Projects</span>

      <Swiper
        className='portfolio__container'
        loop={true}
        spaceBetween={24}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className='portfolio__card' key={id}>
              <div>
                <img src={image} alt='clients' className='portfolio__img' />
              </div>
              <h3 className='portfolio__name'>{title}</h3>
              <p className='portfolio__description'>{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
