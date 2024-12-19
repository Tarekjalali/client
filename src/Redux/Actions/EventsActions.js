import axios from 'axios';
import { GETEVENTS, GETMYEVENTS, GETONEEVENT } from '../ActionTypes/EventTypes';

// Base URL from the environment variable
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getevents = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/events/getAllEvents`);
    dispatch({
      type: GETEVENTS,
      payload: res.data.events,
    });
  } catch (error) {
    console.error(error);
  }
};

export const addevent = (event, navigate) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('image', event.eventPic);

    const resAPI = await axios.post(
      'https://api.imgbb.com/1/upload?key=22970270ad4334a985e23993195591f8',
      formData
    );

    const eventPic = resAPI.data.data.url;
    await axios.post(`${API_BASE_URL}/api/events/createEvent`, { ...event, eventPic });

    dispatch(getevents());
    navigate('/Events');
  } catch (error) {
    console.error(error);
  }
};

export const getonevent = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/events/getOneEvent/${id}`);
    dispatch({
      type: GETONEEVENT,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const deleteEvent = (id, location, navigate, userId) => async (dispatch) => {
  try {
    await axios.delete(`${API_BASE_URL}/api/events/deleteEvent/${id}`);

    if (location.pathname !== '/Profil') {
      dispatch(getevents());
      navigate('/Events');
    } else {
      dispatch(getMyEvents(userId));
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateEvent = (id, changes, navigate) => async (dispatch) => {
  try {
    await axios.put(`${API_BASE_URL}/api/events/updateEvent/${id}`, changes);
    dispatch(getevents());
    navigate('/Events');
  } catch (error) {
    console.error(error);
  }
};

export const getMyEvents = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/api/events/getMyEvents/${id}`);
    dispatch({
      type: GETMYEVENTS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};
