import React from 'react';

const VersionAndDeploy = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Other Technologies</h3>
      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i className='bx bxl-gitlab'></i>
            <div>
              <h3 className='skills__name'>Git Lab</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bxl-github'></i>
            <div>
              <h3 className='skills__name'>Github</h3>
              <span className='skills__level'>Advanced</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bxl-netlify'></i>
            <div>
              <h3 className='skills__name'>Netlify</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bxl-heroku'></i>
            <div>
              <h3 className='skills__name'>Heroku</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <i className='bx bxl-vimeo'></i>
            <div>
              <h3 className='skills__name'>Vercel</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-chevron-up-square'></i>
            <div>
              <h3 className='skills__name'>Render</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bxl-aws'></i>
            <div>
              <h3 className='skills__name'>AWS</h3>
              <span className='skills__level'>Basic</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='uil uil-linux'></i>
            <div>
              <h3 className='skills__name'>Linux</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VersionAndDeploy;
