import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { approveOrReject, getParticipantsList } from '../Redux/Actions/ApplicationActions';
import { useParams } from 'react-router-dom';
import { Button } from 'flowbite-react';  // Import Flowbite Button

const ParticipantList = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getParticipantsList(id));
  }, [dispatch, id]);

  const players = useSelector((state) => state.applicationReducer.participantsList);

  return (
    <div className="d-flex flex-column align-items-center mt-4">
      <h2 className="text-dark mb-4">Participant List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {players.map((el, i) => (
          <div key={i} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.participant.name}</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.participant.email}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Status: <strong>{el.status}</strong>
              </p>

              {/* Flowbite Buttons for Approve, Reject, Reset */}
              <div className="flex gap-4">
                <button
                  onClick={() => dispatch(approveOrReject(id, el._id, { status: 'Approved' }))}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Approve
                </button>
                <button
                  onClick={() => dispatch(approveOrReject(id, el._id, { status: 'Rejected' }))}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Reject
                </button>
                <button
                  onClick={() => dispatch(approveOrReject(id, el._id, { status: 'Pending' }))}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParticipantList;
