import React, {Fragment} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {connect} from 'react-redux';

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        {this.props.users.map((user, index) => (
          <Fragment key={index}>
            <Text>Name: {user.name}</Text>
            <Text>Age: {user.age}</Text>
          </Fragment>
        ))}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(HomeScreen);
