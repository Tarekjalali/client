import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Redux/Actions/AuthActions'
import UpdateProfile from './UpdateProfile'
import MyEvents from './MyEvents'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './CssComponents/Profil.css'

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import AreYouSure from './AreYouSure'
import MyApplications from './MyApplications'


const Profil = () => {
  const user = useSelector(state => state.AuthReducer.user);
  const dispatch = useDispatch();

  // State for drawer
  const [state, setState] = useState({
    left: false,
  });

  // Toggle Drawer open/close
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, left: open });
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <div 
  className='profilePicture' 
  style={{ 
    position: 'relative', 
    backgroundImage: `url(${user.coverPhoto})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    padding: '10px',  // Optional, to create space for the content,
    borderRadius : '20px',
   
  }}
>
  <div>
    <img 
      src={user.profilePic} 
      style={{ width: '165px', height: '165px', margin: '30px' , borderRadius : '30px' }} // Doubled image size
      alt="profile" 
    />
       
    <h1 style={{ marginLeft: '30px', fontSize: '30px' , color : 'white'}}>{user.name}</h1>
  </div>
  {/* Button to open Drawer */}
  <button className='iconButton' onClick={toggleDrawer(true)}>
    <i className="fa-solid fa-bars"></i>
  </button>
</div>     
      <br />    
      {/* Drawer component */}
      <Drawer 
        anchor='right'
        open={state.left}
        onClose={toggleDrawer(false)}
      >
        <List>
          <Divider />
          <ListItem disablePadding>
            <UpdateProfile /> 
          </ListItem>
          <ListItem disablePadding>
            <AreYouSure/>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => dispatch(logout())}>Logout</ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      

      <div>
        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">My Events</h3>
          <MyEvents />
        </div>
        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">My applications</h3>
          <MyApplications />
        </div>
      </div>
    </div>
  )
}

export default Profil;
