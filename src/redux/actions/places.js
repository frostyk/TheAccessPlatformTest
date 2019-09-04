import {SET_PLACES} from '../types/types';

export const setPlaces = (places = []) => {
  return {
    type: SET_PLACES,
    places,
  };
};
