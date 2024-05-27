// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister';
import UserHome from './components/UserHome';
import AddCow from './components/AddCow';
import FetchCow from './components/FetchCow';
import AddAdmin from './components/AddAdmin';
import AdminLogin from './components/AdminLogin';
import Check from './components/Check';
import logo from './assets/Karnataka-Logo.png'
import './App.css'

function App() {

  const navbar = {
  position: "sticky",
  top: 0,
  padding: "10px 20px",
  zIndex: "1000"
  }
  return (
    <Router>
      <div>
        <nav>
          <Link style={navbar} to="/">
          <img src={logo} width='100px' height='80px'/>
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/user/dashboard' element={<UserDashBoard/>}/> */}
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/user/home" element={<UserHome />} />
          <Route path="/user/add-cow" element={<AddCow />} />
          <Route path="/user/fetch-cow" element={<FetchCow />} />
          <Route path="/add-admin" element={<AddAdmin />} /> 
          <Route path="/admin" element={<AdminLogin />} /> 
          <Route path="/check" element={<Check />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
