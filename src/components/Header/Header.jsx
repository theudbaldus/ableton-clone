import React from 'react';
import './Header.scss';

import headerImage from '../../assets/header.jpeg';

const Header = () => {
  return (
    <header className="ableton__header section__padding">
        <img src={headerImage} alt='woman composing music on computer' />
        <h1>Ableton</h1>
    </header>
  );
};

export default Header;