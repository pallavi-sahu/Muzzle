import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/pxfuel.jpg'; 
import '../Styles/home.css'; // Adjust the path as needed
import PersonIcon from '@mui/icons-material/Person';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Box, Typography } from '@mui/material';
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

      {/* <div className='HomePage_options'>
        <div className='hoome-links'><Link to="/user/dashboard"><PersonIcon/> <Typography>User</Typography></Link></div>
        <div className='hoome-links'><Link to="/admin"><PersonIcon/><Typography>Admin</Typography></Link></div>
        <div className='hoome-links'><Link to="/add-admin"><GroupAddIcon/><Typography>Add Admin</Typography></Link></div>
      </div> */}

      <div className="HomePage_options">
        <div className="home-links">
          <Link to="/user/login">
            <Box display="flex" alignItems="center">
              <PersonIcon />
              <Typography variant='h6' fontWeight={700}>User</Typography>
            </Box>
          </Link>
        </div>
        <div className="home-links">
          <Link to="/admin">
            <Box display="flex" alignItems="center">
              <PersonIcon />
              <Typography variant='h6' fontWeight={700}>Admin</Typography>
            </Box>
          </Link>
        </div>
        <div className="home-links">
          <Link to="/add-admin">
            <Box display="flex" alignItems="center" gap='5px'>
              <GroupAddIcon />
              <Typography variant='h6' fontWeight={700}>Add Admin</Typography>
            </Box>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
