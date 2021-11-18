/* eslint-disable no-unused-vars */
import React from 'react';
import Header from 'components/header';

const Home = () => {
  const test = 1;
  return (
    <div className="home container">
      <Header />
      <section className="row body-section">
        <div className="col-6 border-red body-section__message">
          <div className="message-wrapper">
            <h1 className="message-wrapper__heading text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
              So, you want to travel to
              <span className="d-block fs-900 ff-serif text-white">Space</span>
            </h1>

            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
              {' '}
            </p>
          </div>
        </div>
        <div className="col-6 border-red">
          <div className="explore">Explore</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
