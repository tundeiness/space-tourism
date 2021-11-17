/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const SideBar = () => {
  const [isActive, setIsActive] = useState('Home');

  const handleClick = (link) => {
    setIsActive(link);
  };

  return (
    <div className="sidebar">
      <ul id="side-nav" className="sidebar__side-nav">
        <li className={isActive === 'Home' ? 'side-active' : 'side-inactive'}>
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
          className={
            isActive === 'Destination' ? 'side-active' : 'side-inactive'
          }
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
          className={isActive === 'Crew' ? 'side-active' : 'side-inactive'}
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
          className={
            isActive === 'Technology' ? 'side-active' : 'side-inactive'
          }
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
    </div>
  );
};

export default SideBar;
