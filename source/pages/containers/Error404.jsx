import React from 'react';
import { Link } from 'react-router';

function Error404() {
  return (
    <section name="Error404">
      <h1>Error404</h1>
      <Link to="/">
        Go back to home
      </Link>
    </section>
  );
}

export default Error404;
