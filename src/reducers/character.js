import { constants } from '../actions/character';

const reducer = (state = [], action) => {
  switch (action.type) {
    case constants.add:
      return [
        ...state,
        {},
      ];
    default
      return state;
  }
};

export default reducer;
