import React from 'react';

const Social = () => {
  return (
    <div className='home__social'>
      <a
        href='https://github.com/khunzinshine'
        className='home__social-icon'
        target='_blank'
        rel='noreferrer'
      >
        <i class='uil uil-github'></i>
      </a>

      <a
        href='https://www.linkedin.com/in/khun-zin-shine/'
        className='home__social-icon'
        target='_blank'
        rel='noreferrer'
      >
        <i class='uil uil-linkedin'></i>
      </a>

      <a
        href='https://join.skype.com/invite/dBb8BnLPCvOo'
        className='home__social-icon'
        target='_blank'
        rel='noreferrer'
      >
        <i class='uil uil-skype'></i>
      </a>

      <a
        href='https://www.instagram.com/khunzinshine/'
        className='home__social-icon'
        target='_blank'
        rel='noreferrer'
      >
        <i class='uil uil-instagram-alt'></i>
      </a>
    </div>
  );
};

export default Social;
