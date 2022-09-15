import React from 'react';
import './Footer.scss';

import { SiAbletonlive } from 'react-icons/si';
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from 'react-icons/bs';

const Footer = () => {

  return (
    <footer className='ableton__footer footer__padding'>
        <div className='footer-brand'>
          <h1>Ableton</h1>
        </div>

        <div className='footer-block desktop-block'>
          <div className='block-group group-small'>
            <a href='/'>Register Live or Push</a>
            <a href='/'>About Ableton</a>
            <a href='/'>Jobs</a>
            <div className='social-icons'>
              <div className='icon-container facebook'>
                <BsFacebook className='icon' />
              </div>

              <div className='icon-container twitter'>
                <BsTwitter className='icon' />
              </div>

              <div className='icon-container youtube'>
                <BsYoutube className='icon' />
              </div>

              <div className='icon-container instagram'>
                <BsInstagram className='icon' />
              </div>
            </div>
          </div>

          <div className='block-group group-small'>
            <p className='title'>Education</p>
            <a href='/'>Offers for students and teachers</a>
            <a href='/'>Ableton for the Classroom</a>
            <a href='/'>Ableton for Colleges and Universities</a>
          </div>

          <div className='block-group group-large'>
            <p className='title'>Sign up to our newsletter</p>
            <p className='text'>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
            <div className='input'>
              <input type='email' placeholder='Email Address' />
              <button type='button'>Sign Up</button>
            </div>
          </div>
        </div>

        <div className='footer-block mobile-block'>
          <div className='block-group group-large'>
            <p className='title'>Sign up to our newsletter</p>
            <p className='text'>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
            <div className='input'>
              <input type='email' placeholder='Email Address' />
              <button type='button'>Sign Up</button>
            </div>
          </div>
          
          <div className='block-group group-small'>
            <a href='/'>Register Live or Push</a>
            <a href='/'>About Ableton</a>
            <a href='/'>Jobs</a>
            <div className='social-icons'>
              <div className='icon-container facebook'>
                <BsFacebook className='icon' />
              </div>

              <div className='icon-container twitter'>
                <BsTwitter className='icon' />
              </div>

              <div className='icon-container youtube'>
                <BsYoutube className='icon' />
              </div>

              <div className='icon-container instagram'>
                <BsInstagram className='icon' />
              </div>
            </div>
          </div>

          <div className='block-group group-small'>
            <p className='title'>Education</p>
            <a href='/'>Offers for students and teachers</a>
            <a href='/'>Ableton for the Classroom</a>
            <a href='/'>Ableton for Colleges and Universities</a>
          </div>
        </div>

        <div className='footer-block'>
          <div className='block-group group-small'>
            <p className='title'>Community</p>
            <a href='/'>Find Ableton User Groups</a>
            <a href='/'>Find Certified Training</a>
            <a href='/'>Become a Certified Trainer</a>  
          </div>

          <div className='block-group group-small'>
            <p className='title'>Distributors</p>
            <a href='/'>Find Distributors</a>
            <a href='/'>Try Push in-store</a>
          </div>

          <div className='block-group group-large'>
            <p className='title'>Language and Location</p>
            <div className='selectors'>
              <select className='selector language-selector'>
                <option value='english'>English</option>
                <option value='german'>Deutsch</option>
                <option value='french'>Français</option>
                <option value='japanese'>日本語</option>
                <option value='chinese'>中文</option>
              </select>

              <select className='selector country-selector'>
                <option value='us'>United States</option>
              </select>
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <div className='bottom-links'>
            <a href='/'>Contact Us</a>
            <a href='/'>Press Resources</a>
            <a href='/'>Legal Info</a>
            <a href='/'>Privacy Policy</a>
            <a href='/'>Cookie Settings</a>
            <a href='/'>Imprint</a>
          </div>
          
          <div className='bottom-logo'>
            <p>Made in Berlin</p>
            <SiAbletonlive />
          </div>
        </div>
    </footer>
  );
};

export default Footer;