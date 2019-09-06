import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import UserProfile from '../components/UserProfile';
import {connect} from 'react-redux';

class MessageScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <UserProfile {...this.props.user}/>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.selectedUser,
  };
};

export default connect(mapStateToProps)(MessageScreen);
