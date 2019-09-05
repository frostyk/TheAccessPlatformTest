import React from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import Autocomplete from '../components/Autocomplete';
import {getVisiblePlaces} from '../redux/selectors/places';
import UsersList from '../components/UsersList';
import {startFetchingUsers} from '../redux/actions/users';
import {selectUsers} from '../redux/selectors/users';
import {setSearchCriteria, setSearchValue} from '../redux/actions/search';

export class HomeScreen extends React.Component {
  updateSearch = search => {
    this.props.dispatch(setSearchValue(search));
  };

  onPlaceClick = place => {
    this.props.dispatch(setSearchValue(''));
    this.props.dispatch(setSearchCriteria(place));
  };

  componentDidMount() {
    this.props.dispatch(startFetchingUsers());
  }

  render() {
    const {value} = this.props.search;
    return (
      <SafeAreaView>
        <Autocomplete
          data={getVisiblePlaces(this.props.places, value)}
          updateSearch={this.updateSearch}
          value={value}
          onItemClick={this.onPlaceClick}
          itemIcon={'room'}
          placeholder={'Type Country or City...'}
        />
        <UsersList data={this.props.users} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: selectUsers(state.users, state.search.criteria),
    places: state.places,
    search: state.search,
  };
};

export default connect(mapStateToProps)(HomeScreen);
