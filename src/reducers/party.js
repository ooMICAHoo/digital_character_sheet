import { constants } from '../actions/party';

const reducer = (state = [], action) => {
  switch (action.type) {
    case constants.ADD:
      return [
        ...state,
        {},
      ];
    default:
      return state;
  }
};

export default reducer;
