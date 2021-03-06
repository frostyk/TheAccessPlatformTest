import {selectUsers} from '../../../../src/redux/selectors/users';
import users from '../../../../src/__fixtures__/users';

it('should return empty array if criteria is wrong', () => {
  const criteria = {
    region: '',
    country: null,
  };
  const result = selectUsers(users, criteria);
  expect(result).toEqual([]);
});
it('should return selected users', () => {
  const criteria = {
    region: 'Lond',
    country: {name: 'Ukrai'},
  };
  const result = selectUsers(users, criteria);
  expect(result).toEqual([users[0], users[1]]);
});

it('should return selected users by country', () => {
  const criteria = {
    region: '',
    country: {name: 'United'},
  };
  const result = selectUsers(users, criteria);
  expect(result).toEqual(users);
});
