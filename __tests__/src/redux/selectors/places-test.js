import {getVisiblePlaces} from '../../../../src/redux/selectors/places';
import places from '../../../../src/__fixtures__/places';

it('should return countries by search string', () => {
  const searchString = 'ukra';
  const countryBasedPlace = {region: '', country: {name: 'Ukraine'}};
  const result = getVisiblePlaces(places, searchString);
  expect(result).toEqual([countryBasedPlace, places[2]]);
});

it('should return empty array if string is empty or less then 4', () => {
  const emptyResult = getVisiblePlaces(places, '');
  const lessThenThreeResult = getVisiblePlaces(places, 'Ukr');
  expect(emptyResult).toEqual([]);
  expect(lessThenThreeResult).toEqual([]);
});


