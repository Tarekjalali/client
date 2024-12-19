import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { deleteEvent, getonevent } from '../Redux/Actions/EventsActions';
import Button from 'react-bootstrap/esm/Button';

const EventPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        dispatch(getonevent(id));
    }, [dispatch, id]);

    const oneEvent = useSelector(state => state.eventsReducer.oneEvent);
    const user = useSelector(state => state.AuthReducer.user);

    const handleDelete = () => {
        dispatch(deleteEvent(id, location, navigate));
        setIsModalOpen(false); // Close the modal after deleting
    };

    return (
        <div className="ml-8  flex justify-start items-center">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full md:w-1/2" style={{ margin: '30px' }}>
                <a href={`/EventPage/${oneEvent._id}`}>
                    <img
                        className="rounded-t-lg w-full"
                        src={oneEvent.eventPic}
                        alt={oneEvent.Game}
                    />
                </a>
                <div className="p-5">
                    <a href={`/EventPage/${oneEvent._id}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {oneEvent.Game}
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {oneEvent.Location}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {oneEvent.Description}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Date: {oneEvent?.Date?.slice(0, 10)}
                    </p>

                    <div className="flex gap-4">
                        {oneEvent.owner === user._id && (
                            <>
                                <Button
                                    onClick={() => setIsModalOpen(true)}
                                    className="bg-red-600 text-white hover:bg-red-700"
                                >
                                    Delete
                                </Button>
                                <Link
                                    to={`/UpdateEvent/${id}`}
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Update
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    id="popup-modal"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                >
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button
                                type="button"
                                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={() => setIsModalOpen(false)}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-4 md:p-5 text-center">
                                <svg
                                    className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                    Are you sure you want to delete this event?
                                </h3>
                                <button
                                    onClick={handleDelete}
                                    type="button"
                                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                >
                                    Yes, I'm sure
                                </button>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    type="button"
                                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    No, cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventPage;
