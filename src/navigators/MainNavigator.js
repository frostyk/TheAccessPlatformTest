import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import {Icon, Text} from 'react-native-elements';

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Search',
        tabBarIcon: ({focused, horizontal, tintColor}) => (
          <Icon color={'#F44336'} name={'search'} type="material" />
        ),
        tabBarLabel: ({focused, tintColor}) => (
          <Text style={{color: '#FF9800', fontSize: 14}}>Search</Text>
        )
      },
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
