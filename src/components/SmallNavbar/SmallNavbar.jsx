import React from 'react';
import './SmallNavbar.scss'

const SmallNavbar = () => {
  return (
    <nav className="ableton__smallnavbar">
        <a href="/" className="selected-link">About</a>
        <a href="/" className="link">Jobs</a>
        <a href="/" className="link">Apprenticeships</a>
    </nav>
  );
};

export default SmallNavbar;