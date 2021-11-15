/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'static/assets/image/shared/logo.svg';
import Sidebar from 'components/sideBar';
import useToggle from 'utils/toggle';
// import screenWidth from 'utils/viewPort';

const Header = () => {
  const [isActive, setIsActive] = useState('Home');
  const [isSideBar, setIsSideBar] = useToggle();
  // const { width } = screenWidth();
  // const breakpoint = 420;

  const handleClick = (link) => {
    setIsActive(link);
  };

  return (
    <>
      <header className="pry-header">
        <div className="pry-header__img-section border-red">
          <picture className="img-wrap">
            <source srcSet={Logo} media="prefers-color-scheme: dark" />
            <img
              src={Logo}
              alt="space tourism logo"
              className="logo"
              loading="lazy"
            />
          </picture>
        </div>
        <button
          type="button"
          className={isSideBar === false ? 'mobile-nav-toggle' : 'open-mobile'}
          onClick={setIsSideBar}
          aria-controls="primary-navigation"
        >
          <span className="sr-mobile" aria-expanded="false" />
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
      {/* {width > breakpoint && isSideBar ? <Sidebar /> : ''} */}
      {isSideBar ? <Sidebar /> : ''}
    </>
  );
};

export default Header;
