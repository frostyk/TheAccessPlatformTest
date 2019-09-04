import {SET_USERS} from '../types/types';

const usersReducerInitialState = [{name: 'Rostyk', age: 22}];

const usersReducer = (state = usersReducerInitialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default:
      return state;
  }
};

export default usersReducer;