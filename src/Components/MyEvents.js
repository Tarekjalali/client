import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyEvents } from '../Redux/Actions/EventsActions';

import MyEventsCard from './MyEventsCard';
import { Link } from 'react-router-dom';

const MyEvents = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.AuthReducer.user);

    useEffect(() => {
        dispatch(getMyEvents(user._id));
    }, [dispatch, user._id]); 

    const myEvents = useSelector(state => state.eventsReducer.myEvents);

    return (
        <div className="flex gap-4  overflow-x-auto whitespace-nowrap ">
        {myEvents && myEvents.length > 0 ? (
            myEvents.map((el,i,t) => (
                <div key={el._id} className="flex-shrink-0">
                <MyEventsCard el={el} userId={user._id} actionType="apply" className="w-60" key={i} />
                </div>
            ))
        ) : (
            <p>
                You do not have any events,{' '}
                <Link to="/AddEvent" className="text-blue-500 hover:underline">
                    create one?
                </Link>
            </p>
        )}
    </div>
    );
};

export default MyEvents;
