/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AppContainer from './src/navigators/MainNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/store/configureStore';
console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
