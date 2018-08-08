import { constants } from '../actions/party';

const reducer = (state = [], action) => {
  switch (action && action.type) {
    case constants.ADD:
      return [
        ...state,
        action.id,
      ];
    default:
      return state;
  }
};

export default reducer;
