/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'static/assets/image/shared/logo.svg';
// import 'static/sass/components/global.scss';

const Header = () => {
  const [isActive, setIsActive] = useState('Home');
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (link) => {
    setIsActive(link);
  };

  return (
    <header className="pry-header">
      <div className="pry-header__img-section border-red">
        <div className="img-wrap">
          <img src={Logo} alt="space tourism logo" className="logo" />
        </div>
      </div>
      <button
        type="button"
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
      >
        <span className="sr-mobile" aria-expanded="false">
          Menu
        </span>
      </button>
      <nav className="pry-header__nav">
        <ul id="pry-navigation" className="pry-navigation">
          <li className={isActive === 'Home' ? 'active' : 'inactive'}>
            <a
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              href="index.html"
            >
              <span>00</span>
              Home
            </a>
            {' '}
          </li>

          <li
            className={isActive === 'Destination' ? 'active' : 'inactive'}
            onClick={() => handleClick('Destination')}
            aria-hidden="true"
          >
            <a
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              href="destination.html"
            >
              <span>01</span>
              Destination
            </a>
            {' '}
          </li>

          <li
            className={isActive === 'Crew' ? 'active' : 'inactive'}
            onClick={() => handleClick('Crew')}
            aria-hidden="true"
          >
            <a
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              href="crew.html"
            >
              <span>02</span>
              Crew
            </a>
            {' '}
          </li>

          <li
            className={isActive === 'Technology' ? 'active' : 'inactive'}
            onClick={() => handleClick('Technology')}
            aria-hidden="true"
          >
            <a
              className="ff-sans-cond uppercase text-white letter-spacing-2"
              href="technology.html"
            >
              <span>03</span>
              Technology
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
