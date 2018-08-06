import { constants } from '../actions/character';

const initialState = {
  active: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.add:
      return {
        ...state,
        active: {},
      };
    default
      return state;
  }
};

export default reducer;
