import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Autocomplete from '../../../src/components/Autocomplete';
import {getVisiblePlaces} from '../../../src/redux/selectors/places';
import places from '../../../src/__fixtures__/places';

it('renders correctly', () => {
  const tree = renderer.create(
    <Autocomplete
      data={getVisiblePlaces(places, '')}
      updateSearch={() => {}}
      value={'search'}
      onItemClick={() => {}}
      itemIcon={'room'}
      placeholder={'Type Country or City...'}
    />,
  );
  expect(tree).toMatchSnapshot();
});
