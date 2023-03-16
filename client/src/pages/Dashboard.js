import React from 'react';
import AuthService from '../utils/auth';

const Dashboard = () => {
  return (
    <div style={{ background: '#414141', margin: '80px 0px 0px 0px', height: 'calc(100vh - 80px)'}}>
      <h1>Dashboard</h1>
      <button onClick={AuthService.logout}>Logout</button>
    </div>
  )
};

export default Dashboard;
