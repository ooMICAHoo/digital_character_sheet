import { constants } from '../actions/character';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case constants.ADD:
      return {};
    default:
      return state;
  }
};

export default reducer;
