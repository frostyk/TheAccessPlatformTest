import {SET_USERS} from '../types/types';

const usersReducerInitialState = {
  users: [],
  selectedUser: {},
};

const usersReducer = (state = usersReducerInitialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {...state, users: action.users};
    default:
      return state;
  }
};

export default usersReducer;
