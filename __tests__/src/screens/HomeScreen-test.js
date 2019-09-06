import 'react-native';
import React from 'react';
import 'react-native';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import HomeScreen from '../../../src/screens/HomeScreen';

describe('shallow render Home screen', () => {
  const initialState = {
    users: [],
    search: {},
  }; // here it is possible to pass in any middleware if needed into //configureStore
  const mockStore = configureStore();

  it('should render the HOME component correctly', () => {
    const wrapper = shallow(<HomeScreen store={mockStore(initialState)} />)
    expect(wrapper).toMatchSnapshot();
  });
});
