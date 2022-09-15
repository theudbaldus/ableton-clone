import React from 'react';
import './Jobs.scss';

import image from '../../assets/jobs.jpeg';

const Jobs = () => {

  return (
    <section className='ableton__jobs section__padding'>
        <img src={image} alt='workspace with lights' />
        <div className='text-container'>
          <p className='text'>We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.</p>
          <a href='/'>See latest jobs</a>
        </div>
    </section>
  );
};

export default Jobs;