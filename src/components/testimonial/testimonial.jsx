import './testimonial.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Data } from './Data';
// import required modules
import { Pagination } from 'swiper';
import React from 'react';

const Testimonial = () => {
  return (
    <section className='testimonial container section'>
      <h2 className='section__title'>Testimonial</h2>
      <span className='section__subtitle'>What they says</span>

      <Swiper
        className='testimonial__container'
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
            <SwiperSlide className='testimonial__card' key={id}>
              <img src={image} alt='clients' className='testimonial__img' />
              <h3 className='testimonial__name'>{title}</h3>
              <p className='testimonial__description'>{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
