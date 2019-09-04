import {SET_USERS} from '../types/types';

export const setUsers = (users = []) => {
  return {
    type: SET_USERS,
    users,
  };
};
