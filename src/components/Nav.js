import React, { useEffect, useState } from 'react';
import netflixLogo from '../images/netflix.png';
import netflixAvatar from '../images/A5.png';
import './Nav.css';
import { useHistory } from 'react-router-dom';


const Nav = () => {
  const [show, handleShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 80) {
      handleShow(true);
    } else handleShow(false);
  };
  const history = useHistory();

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => {
      window.removeEventListener('scroll', transitionNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        onClick={() => history.push('/')}
        className='nav_logo'
        src={netflixLogo}
        alt='Logo'
      />

      <img
        onClick={() => history.push('/profile')}
        className='nav_avatar'
        src={netflixAvatar}
        alt='Profile'
      />
    </div>
  );
};

export default Nav;
