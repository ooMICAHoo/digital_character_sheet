import { constants } from './actions';
import schema from '../../schema/character.schema.json';

const abilities = schema ? Object.keys(schema.properties.abilities.properties) : {};

const calculateValues = (path, value) => {
  const pathsToPerformCalculation = abilities;
  const calculatedValues = {};
  if (pathsToPerformCalculation.includes(path)) {
    let mod = null;
    if (value <= 3) {
      mod = -3;
    } else if (value <= 5) {
      mod = -2;
    } else if (value <= 8) {
      mod = -1;
    } else if (value <= 12) {
      mod = 0;
    } else if (value <= 15) {
      mod = 1;
    } else if (value <= 17) {
      mod = 2;
    } else if (value > 17) {
      mod = 3;
    }
    calculatedValues[`${path}Mod`] = mod;
  }
  return calculatedValues;
};

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
        activeCharacter: action.id,
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
        activeParty: action.id,
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

    case constants.UPDATE_CHARACTER: {
      const calculatedValues = calculateValues(action.path, action.value);

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
                    ...calculatedValues,
                  };
                }
                return character;
              }),
            };
          }
          return party;
        }),
      };
    }

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
