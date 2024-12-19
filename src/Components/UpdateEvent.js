import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getonevent, updateEvent } from "../Redux/Actions/EventsActions";

const UpdateEvent = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getonevent(id));
  }, [dispatch, id]);

  const oneEvent = useSelector((state) => state.eventsReducer.oneEvent);

  const [Game, setGame] = useState(oneEvent.Game);
  const [Description, setDescription] = useState(oneEvent.Description);
  const [Location, setLocation] = useState(oneEvent.Location);
  const [Date, setDate] = useState(oneEvent.Date);

  useEffect(() => {
    setGame(oneEvent.Game);
    setDescription(oneEvent.Description);
    setLocation(oneEvent.Location);
    setDate(oneEvent.Date);
  }, [oneEvent]);

  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();

    dispatch(updateEvent(id, { Game, Description, Location, Date }, navigate));
  };

  return (
    <form
      className="max-w-sm mx-auto"
      onSubmit={handleUpdate}
    >
      <div className="mb-5">
        <label
          htmlFor="game"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Game
        </label>
        <input
          type="text"
          id="game"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={Game}
          onChange={(e) => setGame(e.target.value)}
          placeholder="Game Name"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <input
          type="text"
          id="description"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="location"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={Location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="date"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Date
        </label>
        <input
          type="date"
          id="date"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          value={Date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default UpdateEvent;
