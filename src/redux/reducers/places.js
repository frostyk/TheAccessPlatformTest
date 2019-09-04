import {SET_PLACES} from '../types/types';
import places from '../../__fixtures__/places';

const placesReducerInitialState = places;

const placesReducer = (state = placesReducerInitialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return action.places;
    default:
      return state;
  }
};

export default placesReducer;
