import './skills.css';

import Backend from './Backend';
import Frontend from './Frontend';
import React from 'react';
import VersionAndDeploy from './VersionAndDeploy';

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <span className='section__subtitle'>My Technical Skills</span>
      <div className='skills__container container grid'>
        <Frontend />
        <Backend />
        <VersionAndDeploy />
      </div>
    </section>
  );
};

export default Skills;
