import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import {HomeScreen} from '../../../src/screens/HomeScreen';

describe('>>>H O M E --- Shallow Render REACT COMPONENTS', () => {
  let wrapper = shallow(<HomeScreen />);

  it('should render the HOME component', () => {
    expect(wrapper.length).toEqual(1);
  });
});
