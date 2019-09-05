import {SET_PLACES} from '../../../../src/redux/types/types';
import places from '../../../../src/__fixtures__/places';
import placesReducer from '../../../../src/redux/reducers/places';

it('should setup default places values', () => {
  const state = placesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

it('should set places', () => {
  const state = placesReducer(undefined, {type: SET_PLACES, places});
  expect(state).toEqual(places);
});
