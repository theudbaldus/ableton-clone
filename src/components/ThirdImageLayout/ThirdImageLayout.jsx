import React from 'react'; 
import './ThirdImageLayout.scss';

import image1 from '../../assets/thirdlayout1.jpeg';
import image2 from '../../assets/thirdlayout2.jpeg';

const ThirdImageLayout = () => {

  return (
    <section className='ableton__thirdlayout imagelayout__padding'>
        <div className='background' />
        <div className="grid">
          <img src={image1} alt="saucisse" className="image-left" />
          <div />
          <img src={image2} alt="saucisse" className="image-right" />
        </div>
    </section>
  );
};

export default ThirdImageLayout;