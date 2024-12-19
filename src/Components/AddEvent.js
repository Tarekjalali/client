import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addevent } from '../Redux/Actions/EventsActions';

const AddEvent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.AuthReducer.user);
  const CreatorId = user._id;

  const [Game, setGame] = useState('');
  const [Description, setDescription] = useState('');
  const [Location, setLocation] = useState('');
  const [Date, setDate] = useState('');
  const [eventPic, seteventPic] = useState('');

  

  const handleAddEvent = (a) => {
    a.preventDefault();
    dispatch(addevent({ Game, Description, Location, eventPic, Date, owner: user._id }, navigate));
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleAddEvent} style={{marginTop : '30px'}}>
      <div className="mb-5">
        <label htmlFor="game" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Game
        </label>
        <input
          type="text"
          id="game"
          value={Game}
          onChange={(e) => setGame(e.target.value)}
          placeholder="Game Name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Description
        </label>
        <input
          type="text"
          id="description"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Location
        </label>
        <input
          type="text"
          id="location"
          value={Location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <form class="max-w-lg mx-auto">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Add Photo</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" onChange={(e)=>seteventPic(e.target.files[0])} />
                   
      </form>
      <div className="mb-5">
        <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Date
        </label>
        <input
          type="date"
          id="date"
          value={Date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        
        </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default AddEvent;
