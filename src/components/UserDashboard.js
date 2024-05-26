// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function UserDashBoard() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link to="/user/login">Login</Link></li>
        <li><Link to="/user/register">Register</Link></li>
      </ul>
    </div>
  );
}

export default UserDashBoard;
