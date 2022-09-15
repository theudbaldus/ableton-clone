import React, { useState } from 'react';
import './Navbar.scss';

import { SiAbletonlive } from "react-icons/si";

const Navbar = () => {
    const [toggleMore, setToggleMore] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='ableton__navbar nav__padding'>
            <div className='ableton__navbar-desktop'>
                <div className="desktop-left">
                    <SiAbletonlive className='logo' />
                    <a href='/'>Live</a>
                    <a href='/'>Push</a>
                    <a href='/'>Link</a>
                    <a href='/'>Shop</a>
                    <a href='/'>Packs</a>
                    <a href='/'>Help</a>
                    <p className='toggle' onClick={() => setToggleMore(!toggleMore)}>{toggleMore ? 'More -' : 'More +'}</p>
                </div>

                <div className="desktop-right">
                    <a href='/' className='link'>Try Live for free</a>
                    <a href='/' className='login'>Log in or register</a>
                </div>
            </div>

            {toggleMore && (
                <div className="ableton__navbar-more">
                    <p className="more-heading">More on Ableton.com:</p>

                    <div className="more-links">
                        <a href="/" className="link">Blog</a>
                        <a href="/" className="link">Ableton for the Classroom</a>
                        <a href="/" className="link">Ableton for Colleges and Universities</a>
                        <a href="/" className="link">Certified Training</a>
                        <a href="/" className="selected-link">About Ableton</a>
                        <a href="/" className="link">Jobs</a>
                        <a href="/" className="link">Apprenticeships</a>
                    </div>

                    <p className="more-heading">More from Ableton:</p>

                    <div className="more-flex">
                        <div className="flex-block">
                            <p className="title">Loop</p>
                            <p className="body">Watch Talks, Performances and Features from Ableton's Summit for Music Makers</p>
                        </div>

                        <div className="flex-block">
                            <p className="title">Learning Music</p>
                            <p className="body">Learn the fundamentals of music making right in your browser.</p>
                        </div>

                        <div className="flex-block">
                            <p className="title">Learning Synths</p>
                            <p className="body">Get started with synthesis using a web-based synth and accompanying lessons.</p>
                        </div>

                        <div className="flex-block">
                            <p className="title">Making Music</p>
                            <p className="body">Some tips from 74 Creative Strategies for Electronic Producers.</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="ableton__navbar-mobile">
                <SiAbletonlive className='logo' />
                <p className='toggle' onClick={() => setToggleMenu(true)}>Menu +</p>
            </div>

            {toggleMenu && (
                <div className="ableton__navbar-menu nav__padding">
                    <div className="menu-top">
                        <SiAbletonlive className='logo' />
                        <p className='toggle' onClick={() => setToggleMenu(false)}>Menu -</p>
                    </div>

                    <div className="menu-links">
                        <a href="/" className="link">Live</a>
                        <a href="/" className="link">Push</a>
                        <a href="/" className="link">Link</a>
                        <a href="/" className="link">Shop</a>
                        <a href="/" className="link">Packs</a>
                        <a href="/" className="link">Help</a>
                        <a href="/" className="link">Try Live for free</a>
                        <a href="/" className="small-link">Log in or register</a>
                        <p className="heading">More on Ableton.com:</p>
                        <a href="/" className="small-link">Blog</a>
                        <a href="/" className="small-link">Ableton for the Classroom</a>
                        <a href="/" className="small-link">Ableton for Colleges and Universities</a>
                        <a href="/" className="small-link">Certified Training</a>
                        <a href="/" className="selected-link">About Ableton</a>
                        <a href="/" className="small-link">Jobs</a>
                        <a href="/" className="small-link">Apprenticeships</a>
                        <p className="heading">More from Ableton:</p>
                        <div className="carousel">
                            <div className="carousel-block">
                                <p className="title">Loop</p>
                                <p className="body">Watch Talks, Performances and Features from Ableton's Summit for Music Makers</p>
                            </div>

                            <div className="carousel-block">
                                <p className="title">Learning Music</p>
                                <p className="body">Learn the fundamentals of music making right in your browser.</p>
                            </div>

                            <div className="carousel-block">
                                <p className="title">Learning Synths</p>
                                <p className="body">Get started with synthesis using a web-based synth and accompanying lessons.</p>
                            </div>

                            <div className="carousel-block">
                                <p className="title">Making Music</p>
                                <p className="body">Some tips from 74 Creative Strategies for Electronic Producers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;