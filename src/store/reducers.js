import { constants } from './actions';

export const initState = {
  activeCharacter: null,
  activeParty: null,
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
      };

    case constants.ADD_PARTY:
      return {
        ...state,
        parties: state.parties.concat({
          characters: [],
          id: action.id,
        }),
      };

    case constants.CANCEL_VIEW_CHARACTER:
      return {
        ...state,
        activeCharacter: initState.activeCharacter,
      };


    case constants.CANCEL_VIEW_PARTY:
      return {
        ...state,
        activeParty: initState.activeParty,
      };

    case constants.UPDATE_CHARACTER:
      return {
        ...state,
        parties: state.parties.map((party) => {
          if (party.id === action.partyId) {
            return {
              ...party,
              characters: party.characters.map((character) => {
                if (character.id === action.id) {
                  return {
                    ...character,
                    [action.path]: action.value,
                  };
                }
                return character;
              }),
            };
          }
          return party;
        }),
      };

    case constants.UPDATE_PARTY:
      return {
        ...state,
        parties: state.parties.map((party) => {
          if (party.id === action.id) {
            return {
              ...party,
              [action.path]: action.value,
            };
          }
          return party;
        }),
      };

    case constants.VIEW_CHARACTER: {
      return {
        ...state,
        activeCharacter: action.id,
      };
    }

    case constants.VIEW_PARTY: {
      return {
        ...state,
        activeParty: action.id,
      };
    }

    default:
      return state;
  }
};

export default reducer;
