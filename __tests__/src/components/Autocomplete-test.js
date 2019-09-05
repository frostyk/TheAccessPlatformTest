import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import Autocomplete from '../../../src/components/Autocomplete';
import places from '../../../src/__fixtures__/places';

it('should render Autocomplete with values', () => {
  const wrapper = shallow(
    <Autocomplete
      data={places}
      updateSearch={jest.fn()}
      value={''}
      onItemClick={jest.fn()}
      itemIcon={'room'}
      placeholder={'Type Country or City...'}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
it('should render Autocomplete with empty array', () => {
  const wrapper = shallow(
    <Autocomplete
      data={[]}
      updateSearch={jest.fn()}
      value={''}
      onItemClick={jest.fn()}
      itemIcon={'room'}
      placeholder={'Type Country or City...'}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
