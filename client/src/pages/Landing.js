import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <main style={{ background: '#414141', margin: '80px 0px 0px 0px', height: 'calc(100vh - 80px)'}}>
      <Link to='/signup' style={{ textDecoration: 'none', color: 'white' }}>
        <h1>Sign Up now</h1>
      </Link>
      <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>
        <h1>Login now</h1>
      </Link>
    </main>
  )
};

export default Landing;
