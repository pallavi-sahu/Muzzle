import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/pxfuel.jpg'; 
import '../Styles/home.css'; // Adjust the path as needed

function Home() {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    opacity:'0.9',
  };

  return (
    <div
      style={containerStyle}
      className="container" 
    >
      
      <div className='homePageCard'>
      <div className='homePage-heading'>Farmer Registration and Unified beneficiary InformaTion System</div>

      <div className='HomePage_options'>
        <p><Link to="/user/dashboard">User</Link></p>
        <p><Link to="/admin">Admin</Link></p>
        <p><Link to="/add-admin">Add Admin</Link></p>
      </div>
      </div>
    </div>
  );
}

export default Home;
