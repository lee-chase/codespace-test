import React from 'react';
import logo from '../logo.svg';
import { Link } from '../components/Link';

import './Home.scss';

export const Home = () => {
  return (
    <div className="home">
      <img src={logo} className="home__logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Link
        className="home__link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer">
        Learn React
      </Link>
      <br />
      <Link className="home__link" to="/about">
        See about
      </Link>
      <br />
      <Link className="home__link" to="/not-a-route">
        Not a route
      </Link>
    </div>
  );
};

export default Home;
