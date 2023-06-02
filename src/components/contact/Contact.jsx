import React from 'react';

const Contact = () => {
  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title'>Get in touch</h2>
      <span className='section__subtitle'>Contact</span>

      <div className='contact__container container grid'>
        <div className='contact__content'>
          <h3 className='contact__title'>Talk to me</h3>

          <div className='contact__info'>
            <div className='contact__card'>
              <i className='bx bx contact__card-icon'></i>
              <h3 className='contact__card-title'>Email</h3>
              <span className='contact__card-data'>khunzinshine@gmail.com</span>

              <a href='#' className='contact__button'>
                Write Me
                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>

            <div className='contact__card'>
              <i className='bx bx contact__card-icon'></i>
              <h3 className='contact__card-title'>Linkedin</h3>
              <span className='contact__card-data'>
                https://www.linkedin.com/in/khun-zin-shine/
              </span>

              <a href='#' className='contact__button'>
                Write Me
                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>

            <div className='contact__card'>
              <i className='bx bx contact__card-icon'></i>
              <h3 className='contact__card-title'>Viber</h3>
              <span className='contact__card-data'>(+959) 788926700</span>

              <a href='#' className='contact__button'>
                Write Me
                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>
          </div>
        </div>

        <div className='contact__content'>
          <h3 className='contact__title'>Write me your project</h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;
