import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import Autocomplete from '../../../src/components/Autocomplete';
import {getVisiblePlaces} from '../../../src/redux/selectors/places';
import places from '../../../src/__fixtures__/places';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Autocomplete
        data={getVisiblePlaces(places, '')}
        updateSearch={jest.fn()}
        value={'search'}
        onItemClick={jest.fn()}
        itemIcon={'room'}
        placeholder={'Type Country or City...'}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
