import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardEvent from './CardEvent';
import MyApplicationsCard from './MyApplicationsCard';
import { getMyApplications } from '../Redux/Actions/ApplicationActions';
import { Link } from 'react-router-dom';

const MyApplications = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.AuthReducer.user);
  
  useEffect(()=>{
    if(user._id){
      dispatch(getMyApplications(user._id))
    }
    
  },[user, dispatch])

  const myApps = useSelector(state=>state.applicationReducer.myApps)

  

 

  return (
    
    <div className="flex flex-wrap gap-4">

        {myApps && myApps.length > 0 ? (
            myApps.map((el,i,t) => (
              <MyApplicationsCard el={el} key={i}/>
            ))
        ) : (
            <p>
                You do not have any applications,{' '}
                <Link to="/Events" className="text-blue-500 hover:underline">
                    apply for an event?
                </Link>
            </p>
        )}
     
   </div>
  );
};

export default MyApplications;
