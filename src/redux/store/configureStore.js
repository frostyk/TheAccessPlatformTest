import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import usersReducer from '../reducers/users';

const reducer = combineReducers({
  users: usersReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
