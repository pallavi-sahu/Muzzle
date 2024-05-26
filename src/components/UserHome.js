// src/components/UserHome.js
import React from 'react';
import { Link } from 'react-router-dom';

function UserHome() {
  return (
    <div>
      <h2>User Home</h2>
      <ul>
        <li><Link to="/user/fetch-cow">Registered Cow</Link></li>
        <li><Link to="/user/add-cow">Add Cow</Link></li>
      </ul>
    </div>
  );
}

export default UserHome;
