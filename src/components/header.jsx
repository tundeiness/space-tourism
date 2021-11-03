/* eslint-disable no-unused-vars */
import React from 'react';
import Logo from 'static/assets/image/shared/logo.svg';
// import 'static/sass/components/global.scss';

const Header = () => {
  const test = 'test';
  return (
    <header className="primary-header">
      <div>
        <img src={Logo} alt="space tourism logo" className="logo" />
      </div>
      <button type="button" className="mobile-nav-toggle" aria-controls="primary-navigation"><span className="sr-only" aria-expanded="false">Menu</span></button>
      <nav>
        <ul id="primary-navigation" className="primary-navigation underline-indicators flex">
          <li className="active">
            <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="index.html">
              <span>00</span>
              Home
            </a>
            {' '}
          </li>

          <li>
            <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="destination.html">
              <span>01</span>
              Destination
            </a>
            {' '}
          </li>

          <li>
            <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="crew.html">
              <span>02</span>
              Crew
            </a>
            {' '}
          </li>

          <li>
            <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="technology.html">
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
