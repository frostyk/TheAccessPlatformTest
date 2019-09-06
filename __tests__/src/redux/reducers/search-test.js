import searchReducer from '../../../../src/redux/reducers/search';
import {
  SET_SEARCH_CRITERIA,
  SET_SEARCH_IS_LOADING,
  SET_SEARCH_VALUE,
} from '../../../../src/redux/types/types';

describe('Search action', () => {
  let initialState = {};

  beforeEach(() => {
    initialState = {
      value: '',
      isLoading: false,
      criteria: {
        region: '',
        country: {},
      },
    };
  });

  it('should setup default searh state', () => {
    const action = searchReducer(undefined, {type: '@@INIT'});
    expect(action).toEqual(initialState);
  });

  it('should set search value', () => {
    const value = 'London';
    const action = searchReducer(initialState, {type: SET_SEARCH_VALUE, value});
    expect(action).toEqual({...initialState, value});
  });

  it('should set isloading value', () => {
    const action = searchReducer(initialState, {
      type: SET_SEARCH_IS_LOADING,
      isLoading: true,
    });
    expect(action).toEqual({...initialState, isLoading: true});
  });

  it('should set search criteria', () => {
    const criteria = {region: 'London', country: null};

    const action = searchReducer(initialState, {
      type: SET_SEARCH_CRITERIA,
      criteria,
    });
    expect(action).toEqual({...initialState, criteria} );
  });
});
