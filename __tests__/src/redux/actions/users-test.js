import {SET_USERS} from '../../../../src/redux/types/types';
import {setUsers} from '../../../../src/redux/actions/users';
import users from '../../../../src/__fixtures__/users';

it('should setup set users action object', () => {
  const action = setUsers(users);
  expect(action).toEqual({
    type: SET_USERS,
    users,
  });
});
