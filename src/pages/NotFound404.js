import React from 'react';
import { Link } from '../components/Link';

class NotFound404 extends React.Component {
  render() {
    return (
      <div>
        <h2>404 Page</h2>
        <main>
          <p>Did not find what you were looking for? Try one of page links.</p>
          <Link className="bx--link" to="/">
            Let&apos;s get you home
          </Link>
        </main>
      </div>
    );
  }
}

export default NotFound404;
