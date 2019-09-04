import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import usersReducer from '../reducers/users';
import placesReducer from '../reducers/places';

const reducer = combineReducers({
  users: usersReducer,
  places: placesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
