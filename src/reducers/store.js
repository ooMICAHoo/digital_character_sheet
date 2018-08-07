import { combineReducers } from 'redux'

// import character from './character'
import party from './party'

export const applyReducer(reducers, initialState = {}) {
  return (state = initialState, action) => {
    const reducerFunc = reducers[action.type] ? reducers[action.type] : () => state;
    return reducerFunc(state, action);
  };
};

export default combineReducers({ party });
