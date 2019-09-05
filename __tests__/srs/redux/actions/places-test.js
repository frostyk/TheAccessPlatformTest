import {SET_PLACES} from '../../../../src/redux/types/types';
import {setPlaces} from '../../../../src/redux/actions/places';
import places from '../../../../src/__fixtures__/places';

it('should setup set places action object', () => {
  const action = setPlaces(places);
  expect(action).toEqual({
    type: SET_PLACES,
    places,
  });
});
