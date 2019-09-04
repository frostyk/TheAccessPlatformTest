import {SET_PLACES} from '../types/types';

const placesReducerInitialState = [
  {
    region: 'London',
    country: 'Great Britain',
  },
  {
    region: 'Lviv',
    country: 'Ukraine',
  },
];

const placesReducer = (state = placesReducerInitialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return action.places;
    default:
      return state;
  }
};

export default placesReducer;
