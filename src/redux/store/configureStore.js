import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import usersReducer from '../reducers/users';
import placesReducer from '../reducers/places';
import searchReducer from '../reducers/search';

const reducer = combineReducers({
  users: usersReducer,
  places: placesReducer,
  search: searchReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
