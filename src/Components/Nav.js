import React, { useState, useEffect } from 'react';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        className='nav__logo'
        src='https://i.ibb.co/Wc5qwvm/netflix-logo-text-emblem-31.png'
        alt='Netflix Logo'
      />
      <img
        className='nav__avatar'
        src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg'
        alt='Netflix Logo'
      />
    </div>
  );
}

export default Nav;
