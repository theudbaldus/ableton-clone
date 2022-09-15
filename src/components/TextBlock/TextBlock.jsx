import React from 'react';
import './TextBlock.scss';

const TextBlock = ({ heading, text, subText }) => {

  return (
    <section className='ableton__textblock section__padding'>
      <div className="textblock-container">
        <p className='strong-text'>{heading}</p>
        <p className='text'>{text}</p>
        {subText && (
          <p className='text'>{subText}</p>
        )}
      </div>
    </section>
  );
};

export default TextBlock;