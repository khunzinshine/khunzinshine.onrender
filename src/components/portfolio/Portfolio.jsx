import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import "./Portfolio.scss";
import { Data } from "./Data";

const Portfolio = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="portfolio container section" id="portfolio">
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        Portfolio
      </motion.h2>

      <motion.span
        className="section__subtitle"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        My Projects
      </motion.span>

      <Swiper
        className="portfolio__container"
        loop={true}
        spaceBetween={24}
        grabCursor={true}
        pagination={{ clickable: true }}
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
        {Data.map(({ id, image, title, description }) => (
          <SwiperSlide className="portfolio__card" key={id}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              variants={cardVariants}
            >
              <img src={image} alt={title} className="portfolio__img" />
              <h3 className="portfolio__name">{title}</h3>
              <p className="portfolio__description">{description}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
