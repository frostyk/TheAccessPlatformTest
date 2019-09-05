import {SET_USER, SET_USERS} from '../types/types';
import axios from 'axios';
import {parsePlaces} from '../../util/places';
import {setPlaces} from './places';

export const setUsers = (users = []) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const setUser = (user = {}) => {
  return {
    type: SET_USER,
    user,
  };
};

export const startFetchingUsers = () => {
  return dispatch => {
    axios
      .get('https://api-dev.tap.tf/v1/widget/38/users')
      .then(res => {
        const users = res.data.data.users;
        const places = parsePlaces(users);
        dispatch(setPlaces(places))
        dispatch(setUsers(users));
      })
      .catch(e => {
        console.log(e);
      });
  };
};
