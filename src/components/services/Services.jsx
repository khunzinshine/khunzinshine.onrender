import "./services.scss";

import React, { useState } from "react";

const Services = () => {
  const [visiable, setVisiable] = useState(0);

  const openModal = index => {
    setVisiable(index);
  };

  const closeModal = () => {
    setVisiable(0);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I do</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-desktop-alt services__icon"></i>
            <h3 className="services__title">Frontend Development</h3>
          </div>

          <span className="services__button" onClick={() => openModal(1)}>
            Details
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              visiable === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={closeModal}
              ></i>
              <h3 className="services__modal-title">Frontend Development</h3>
              <p className="services__modal-description"></p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Responsive Web Design</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Performance Optimization
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Third-Party Integrations
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Search Engine Optimization (SEO)
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Ongoing Support and Maintenance
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-cog services__icon"></i>
            <h3 className="services__title">Backend Development</h3>
          </div>

          <span className="services__button" onClick={() => openModal(2)}>
            Details
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              visiable === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={closeModal}
              ></i>
              <h3 className="services__modal-title">Backend Development</h3>
              <p className="services__modal-description"></p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Efficient API Development
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Seamless Integration</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Real-time Applications</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Scalable Microservices</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Robust Testing and Deployment
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
