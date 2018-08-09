// import { combineReducers } from 'redux';

import { constants } from './actions';

export const initState = {
  parties: [],
};

const reducer = (state = initState, action) => {
  switch (action && action.type) {
    case constants.ADD_CHARACTER:
      return {
        ...state,
        parties: state.parties.map((party) => {
          if (party.id === action.partyId) {
            return {
              ...party,
              characters: party.characters.concat({
                id: action.id,
              }),
            };
          }
          return party;
        }),
        // parties: state.parties.concat({
        //   characters: [],
        //   id: action.id,
        // }),
      };

    case constants.ADD_PARTY:
      return {
        ...state,
        parties: state.parties.concat({
          characters: [],
          id: action.id,
        }),
      };

    default:
      return state;
  }
};

// export default combineReducers({ character, party });
export default reducer;
