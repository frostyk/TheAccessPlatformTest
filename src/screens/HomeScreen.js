import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from 'react-native/Libraries/NewAppScreen/components/Header';

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Header />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
