import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentuser, updateuser } from '../Redux/Actions/AuthActions';
import { useNavigate } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

const UpdateProfile = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(currentuser());
  }, [dispatch]);

  const user = useSelector(state => state.AuthReducer.user);

  const [show, setShow] = useState(false);
  const [name, setName] = useState(user.name);
  const [profilePic,setprofilePic] = useState(user.profilePic)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdate = (a) => {
    a.preventDefault();
    dispatch(updateuser(user._id, { name, profilePic }, navigate));
    handleClose();
  }

  return (
    <>
     
        <ListItemButton  disablePadding onClick={handleShow}>Update Info</ListItemButton>
    

      {/* Flowbite Modal Structure */}
      <div id="authentication-modal" tabIndex="-1" aria-hidden={show ? "false" : "true"} className={`${show ? 'block' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Update Profile</h3>
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleClose}>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal Body */}
            <div className="p-4 md:p-5">
              <form className="space-y-4" onSubmit={handleUpdate}>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <form class="max-w-lg mx-auto">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">change Profile Picture</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" onChange={(e)=>setprofilePic(e.target.files[0])}/>
                   
                  </form>
                </div>
                <div className="flex justify-between">
                  <button type="button" className="w-full text-gray-900 bg-gray-200 hover:bg-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:text-white" onClick={handleClose}>
                    Close
                  </button>
                  <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">
                    Save Changes
                   </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdateProfile;
