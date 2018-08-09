import { generate } from 'shortid';

import reducers, { initState } from './reducers';
import { constants } from './actions';

describe('reducers', () => {
  it('should handle undefined action', () => {
    expect(reducers()).toEqual(initState);
  });

  it('should handle ADD_PARTY action', () => {
    const id = generate();
    const secondId = generate();
    const expectedParty1 = { id, characters: [] };
    const expectedParty2 = { id: secondId, characters: [] };

    const state = reducers(initState, {
      type: constants.ADD_PARTY,
      id,
    });
    expect(state).toEqual({ parties: [expectedParty1] });
    expect(reducers(state, {
      type: constants.ADD_PARTY,
      id: secondId,
    })).toEqual({
      parties: [expectedParty1, expectedParty2],
    });
  });

  it('should handle ADD_CHARACTER action', () => {
    const id = generate();
    const secondId = generate();
    const partyId = generate();
    const expectedCharacter1 = { id };
    const expectedCharacter2 = { id: secondId };
    const expectedParty1 = { id: partyId, characters: [expectedCharacter1] };
    const expectedParty2 = { id: partyId, characters: [expectedCharacter1, expectedCharacter2] };

    const state = reducers({ parties: [{ id: partyId, characters: [] }] }, {
      type: constants.ADD_CHARACTER,
      id,
      partyId,
    });
    expect(state).toEqual({ parties: [expectedParty1] });
    expect(reducers(state, {
      type: constants.ADD_CHARACTER,
      id: secondId,
      partyId,
    })).toEqual({
      parties: [expectedParty2],
    });
  });
});
