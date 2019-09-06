import {SET_PLACES} from '../types/types';

const placesReducerInitialState = [];

const placesReducer = (state = placesReducerInitialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return action.places;
    default:
      return state;
  }
};

export default placesReducer;
