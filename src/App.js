// App.js
import './App.css';
import NavProject from './Components/NavProject';
import { Route, Routes } from 'react-router-dom';
import NewsFeed from './Components/NewsFeed';
import Register from './Components/Register';
import Login from './Components/Login';
import Events from './Components/Events';
import Profil from './Components/Profil';
import PrivateRoute from './Components/PrivateRoute';
import UsersList from './Components/UsersList';
import AddEvent from './Components/AddEvent';
import EventPage from './Components/EventPage';
import UpdateEvent from './Components/UpdateEvent';
import Applications from './Components/Applications';
import { currentuser } from './Redux/Actions/AuthActions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MyEvents from './Components/MyEvents';
import MyApplications from './Components/MyApplications';
import ParticipantList from './Components/ParticipantList';
import AreYouSure from './Components/AreYouSure';
import GlobalFooter from './Components/GlobalFooter';




function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(currentuser());
    }
  }, [dispatch]);

  return (
    
      <div >
        {/* <div style={{ display: 'flex' }}> */}
        <div style={{ position: 'relative' }}>
        <NavProject></NavProject>
        <div style={{ flexGrow: 1, paddingLeft: '90px' }}>
          
        <Routes>
          <Route path='/' element={<NewsFeed></NewsFeed>}></Route>
          <Route path='/Register' element={<Register></Register>}></Route>
          <Route path='/Login' element={<Login></Login>}></Route>
          <Route path='/Events' element={<Events></Events>}></Route>
          <Route path='/UsersList' element={<PrivateRoute requiredRole="admin"><UsersList/></PrivateRoute>}></Route>
          <Route path='/Profil' element={<PrivateRoute><Profil></Profil></PrivateRoute>}></Route>
          <Route path='/AddEvent' element={<AddEvent></AddEvent>}></Route>
          <Route path='/EventPage/:id' element={<EventPage/>}/>  
          <Route path='/UpdateEvent/:id' element={<UpdateEvent/>}/>  
          <Route path='/Applications' element={<PrivateRoute requiredRole="admin"><Applications/></PrivateRoute>}/>  
          <Route path='/MyEvents' element={<MyEvents/>}/> 
          <Route path='/MyApplications' element={<PrivateRoute><MyApplications/></PrivateRoute>}></Route>
          <Route path='/ParticipantList/:id' element={<ParticipantList/>}/> 
          <Route path='/AreYouSure' element={<AreYouSure/>}/>

          
        </Routes>
        </div>
        </div>
        <GlobalFooter></GlobalFooter>
      </div>
      
  )
}

export default App;
