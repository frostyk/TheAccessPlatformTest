import {SET_USERS} from '../types/types';
import users from '../../__fixtures__/users';

const usersReducerInitialState = users;

const usersReducer = (state = usersReducerInitialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default:
      return state;
  }
};

export default usersReducer;
