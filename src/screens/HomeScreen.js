import React from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import Autocomplete from '../components/Autocomplete';
import {getVisiblePlaces} from '../redux/selectors/places';
import UsersList from '../components/UsersList';

export class HomeScreen extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
  };

  onPlaceClick = place => {
    this.updateSearch('');
  };

  render() {
    const {search} = this.state;
    return (
      <SafeAreaView>
        <Autocomplete
          data={getVisiblePlaces(this.props.places, search)}
          updateSearch={this.updateSearch}
          value={search}
          onItemClick={this.onPlaceClick}
          itemIcon={'room'}
          placeholder={'Type Country or City...'}
        />
        <UsersList data={this.props.users}/>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    places: state.places,
  };
};

export default connect(mapStateToProps)(HomeScreen);
