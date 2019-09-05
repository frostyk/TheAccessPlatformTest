import React from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import Autocomplete from '../components/Autocomplete';
import {getVisiblePlaces} from '../redux/selectors/places';
import UsersList from '../components/UsersList';
import {startFetchingUsers} from '../redux/actions/users';
import {selectUsers} from '../redux/selectors/users';
import {setSearchCriteria, setSearchValue} from '../redux/actions/search';
import {NavigationActions} from 'react-navigation';

export class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(startFetchingUsers());
  }

  updateSearch = search => {
    this.props.dispatch(setSearchValue(search));
  };

  onPlaceClick = place => {
    this.props.dispatch(setSearchValue(''));
    this.props.dispatch(setSearchCriteria(place));
  };
  onUserPress = user => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Message',
      params: {},
      action: NavigationActions.navigate({routeName: 'Message'}),
    });
    this.props.navigation.dispatch(navigateAction);
  };

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
        <UsersList
          location={this.props.search.criteria}
          data={this.props.users}
          onPress={this.onUserPress}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: selectUsers(state.users.users, state.search.criteria),
    places: state.places,
    search: state.search,
  };
};

export default connect(mapStateToProps)(HomeScreen);
