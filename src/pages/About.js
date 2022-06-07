import React from 'react';
import { Link } from '../components/Link';

import './About.scss';

export const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <main>
        <p>This section contains information about...</p>
        <Link className="bx--link" to="/">
          Go home
        </Link>
      </main>
    </div>
  );
};

export default About;
