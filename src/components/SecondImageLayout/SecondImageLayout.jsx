import React from 'react';
import './SecondImageLayout.scss';

import image1 from '../../assets/secondlayout1.jpeg';
import image2 from '../../assets/secondlayout2.jpeg';
import image3 from '../../assets/secondlayout3.png';

const SecondImageLayout = () => {

  return (
    <section className='ableton__secondlayout imagelayout__padding'>
        <div className='background' />
        <div className='container-grid'>
          <div className='inner-grid'>
            <img src={image1} alt='people writing on white board' />
            <div />
            <img src={image2} alt='front sign of a music shop' />
          </div>
          <div />
          <img src={image3} alt='studio setc' className='image-right' />
        </div>
    </section>
  );
};

export default SecondImageLayout; 