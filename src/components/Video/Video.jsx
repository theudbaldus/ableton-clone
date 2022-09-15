import React from 'react';
import './Video.scss';

const Video = () => {

  return (
    <section className="ableton__video section__padding">
      <div className="video-container">
        <iframe
          className='video'
          src="https://www.youtube.com/embed/9SbnhgjeyXA" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Video;