import { generate } from 'shortid';

import partyReducer from './party';
import { constants } from '../actions/party';

describe('reducers -> party', () => {
  it('should handle undefined action', () => {
    expect(partyReducer()).toEqual([]);
  });
  it('should handle ADD action', () => {
    const id = generate();
    const secondId = generate();
    const state = partyReducer([], {
      type: constants.ADD,
      id,
    });
    expect(state).toEqual([id]);
    expect(partyReducer(state, {
      type: constants.ADD,
      id: secondId,
    })).toEqual([id, secondId]);
  });
});
