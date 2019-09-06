import usersReducer from '../../../../src/redux/reducers/users';
import {SET_USERS} from '../../../../src/redux/types/types';
import users from '../../../../src/__fixtures__/users';

it('should setup default users values', () => {
  const state = usersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({selectedUser: {}, users: []});
});

it('should set users', () => {
  const state = usersReducer(undefined, {type: SET_USERS, users});
  expect(state).toEqual({selectedUser: {}, users});
});
