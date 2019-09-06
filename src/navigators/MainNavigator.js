import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import {Icon, Text} from 'react-native-elements';
import {createStackNavigator} from 'react-navigation-stack';
import MessageScreen from '../screens/MessageScreen';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
    Message: MessageScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      title: 'Search',
      tabBarIcon: ({focused, horizontal, tintColor}) => (
        <Icon color={'#F44336'} name={'search'} type="material" />
      ),
      tabBarLabel: ({focused, tintColor}) => (
        <Text style={{color: '#FF9800', fontSize: 14}}>Search</Text>
      ),
    },
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
