import React from 'react';
import './FirstImageLayout.scss';

import image1 from '../../assets/firstlayout1.jpeg';
import image2 from '../../assets/firstlayout2.jpeg';

const FirstImageLayout = () => {

  return (
    <section className='ableton__firstlayout imagelayout__padding'>
      <div className="background" />
      <div className="grid">
        <img src={image1} alt="saucisse" className="image-left" />
        <div />
        <img src={image2} alt="saucisse" className="image-right" />
      </div>
    </section>
  );
};

export default FirstImageLayout;