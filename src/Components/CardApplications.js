import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'flowbite-react'; // Import Flowbite Button
import { cancelApplication } from '../Redux/Actions/ApplicationActions'; // Assume you have an action to handle canceling applications

const CardApplication = ({ el }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.AuthReducer.user);

  const handleCancelApplication = () => {
    // Dispatch an action to cancel the application
    dispatch(cancelApplication(el._id));
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        {/* Event Information */}
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el?.event?.Game}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el?.event?.Location}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el?.event?.Description}</p>

        {/* Participant Information */}
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el?.participant ? el?.participant?.name : "fail"}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el?.participant ? el?.participant?.email : "fail"}</p>

        {/* Cancel Application Button */}
        <div className="flex gap-4">
          
        </div>
      </div>
    </div>
  );
};

export default CardApplication;
