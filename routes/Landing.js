import React from 'react';
import {Link} from 'react-router-dom';

function Landing() {
  return (
    <div>
      <h1>This is the landing page</h1>
      <Link to="/dashboard">Go to dashboard</Link>
    </div>
  );
}

export default Landing;

