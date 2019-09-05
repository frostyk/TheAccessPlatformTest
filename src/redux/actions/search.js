import {SET_SEARCH_CRITERIA, SET_SEARCH_VALUE} from '../types/types';

export const setSearchValue = (value = '') => {
  return {
    type: SET_SEARCH_VALUE,
    value,
  };
};

export const setSearchCriteria = (criteria = {region: '', country: {}}) => {
  return {
    type: SET_SEARCH_CRITERIA,
    criteria,
  };
};
export const setSearchIsLoading = (isLoading = false) => {
  return {
    type: SET_SEARCH_CRITERIA,
    isLoading,
  };
};
