import { constants } from '../actions/character';
import { applyReducer } from './store';

const initialState = {
  active: null,
  list: [],
};

// ADD
const add = (state, action) => {
  // @NOTE should the UI change to 'party show' view or stay on 'party index'?
  const active = {
    id: action.id,
  };

  // 
  const list = [...state.list, active];
  return {
    ...state,
    active,
    list,
  };
}

const reducers = {
  [constants.ADD]: add,
}

export default applyReducer(reducer, initialState);
