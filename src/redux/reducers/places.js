import {SET_PLACES} from '../types/types';

const placesReducerInitialState = [
  {
    id: 1,
    region: 'London',
    country: 'Great Britain',
  },
  {
    id: 2,
    region: 'Lviv',
    country: 'Ukraine',
  },
  {
    id: 3,
    region: 'Kiev',
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
