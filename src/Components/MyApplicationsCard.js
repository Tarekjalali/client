import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { cancelApplication, getMyApplications } from '../Redux/Actions/ApplicationActions';

const MyApplicationsCard = ({ el }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyApplications(el.participant._id));
  }, [dispatch, el.participant._id]);

  return (
    <div
      className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      style={{ width: '295px', height: '340px' }} // Card dimensions
    >
      <div className="relative">
        <Link to={`/EventPage/${el?.event?._id}`}>
          <img
            src={el?.event?.eventPic}
            alt={el?.event?.Game}
            className="rounded-t-lg"
            style={{ width: '295px', height: '170px', objectFit: 'cover' }} // Image dimensions
          />
        </Link>
      </div>
      <div
        className="p-3 flex flex-col justify-between"
        style={{ width: '295px', height: '170px' }} // Content area dimensions
      >
        <div>
          <Link to={`/EventPage/${el?.event?._id}`}>
            <h5 className="mb-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              {el?.event?.Game}
            </h5>
          </Link>
          <p className="mb-1 text-sm font-normal text-gray-700 dark:text-gray-400">
            {el?.event?.Location}
          </p>
          <p className="mb-1 text-sm font-normal text-gray-700 dark:text-gray-400">
            {el?.event?.Description}
          </p>
          <p className="mb-1 text-sm font-normal text-gray-700 dark:text-gray-400">
            Status: {el.status}
          </p>
        </div>
        {el.status === 'Pending' && (
          <button
            onClick={() => dispatch(cancelApplication(el._id, el?.participant?._id))}
            className="px-3 py-2 text-xs font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
          >
            Cancel Application
          </button>
        )}
      </div>
    </div>
  );
};

export default MyApplicationsCard;
