import {
  SET_SEARCH_CRITERIA,
  SET_SEARCH_IS_LOADING,
  SET_SEARCH_VALUE,
} from '../types/types';

const searchReducerInitialState = {
  value: '',
  isLoading: false,
  criteria: {
    region: '',
    country: {},
  },
};

const searchReducer = (state = searchReducerInitialState, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {...state, value: action.value};
    case SET_SEARCH_IS_LOADING:
      return {...state, isLoading: action.isLoading};
    case SET_SEARCH_CRITERIA:
      return {...state, criteria: action.criteria};
    default:
      return state;
  }
};

export default searchReducer;
