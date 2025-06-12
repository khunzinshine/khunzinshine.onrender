import "./services.scss";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [visiable, setVisiable] = useState(0);

  const openModal = (index) => {
    setVisiable(index);
  };

  const closeModal = () => {
    setVisiable(0);
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1 },
  };

  return (
    <section className="services section" id="services">
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        Services
      </motion.h2>

      <motion.span
        className="section__subtitle"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        What I do
      </motion.span>

      <motion.div
        className="services__container container grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {[
          {
            icon: "uil uil-desktop-alt",
            title: "Frontend Development",
            modalIndex: 1,
            services: [
              "Responsive Web Design",
              "Performance Optimization",
              "Third-Party Integrations",
              "Search Engine Optimization (SEO)",
              "Ongoing Support and Maintenance",
            ],
          },
          {
            icon: "uil uil-cog",
            title: "Backend Development",
            modalIndex: 2,
            services: [
              "Efficient API Development",
              "Seamless Integration",
              "Real-time Applications",
              "Scalable Microservices",
              "Robust Testing and Deployment",
            ],
          },
        ].map(({ icon, title, modalIndex, services }) => (
          <motion.div
            key={modalIndex}
            className="services__content"
            variants={cardVariants}
          >
            <div>
              <i className={`${icon} services__icon`}></i>
              <h3 className="services__title">{title}</h3>
            </div>

            <span
              className="services__button"
              onClick={() => openModal(modalIndex)}
            >
              Details
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <AnimatePresence>
              {visiable === modalIndex && (
                <motion.div
                  className="services__modal active-modal"
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={closeModal}
                >
                  <div
                    className="services__modal-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i
                      className="uil uil-times services__modal-close"
                      onClick={closeModal}
                    ></i>
                    <h3 className="services__modal-title">{title}</h3>
                    <p className="services__modal-description"></p>
                    <ul className="services__modal-services grid">
                      {services.map((service, i) => (
                        <li key={i} className="services__modal-service">
                          <i className="uil uil-check-circle services__modal-icon"></i>
                          <p className="services__modal-info">{service}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
