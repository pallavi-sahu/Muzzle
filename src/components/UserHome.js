// src/components/UserHome.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/userHome.css'

function UserHome() {
  return (
    <div className="user-home-container">
    <header className="user-home-header">
      <h1>User Home</h1>
    </header>
    <ul className="user-home-list">
      <li className="user-home-list-item">
        <Link to="/user/fetch-cow" className="user-home-link">Registered Cow</Link>
      </li>
      <li className="user-home-list-item">
        <Link to="/user/add-cow" className="user-home-link">Add Cow</Link>
      </li>
    </ul>
  </div>
  );
}

export default UserHome;
