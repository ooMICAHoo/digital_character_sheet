/**
 * party actions
 */

/**
 * action type constants
 */
export const constants = {
  ADD_PARTY: 'ADD_PARTY',
  ADD_CHARACTER: 'ADD_CHARACTER',
  // CHANGE: 'PARTY_CHANGE',
  // DESTRY: 'PARTY_DESTROY',
  // INDEX: 'PARTY_INDEX',
  // SHOW: 'PARTY_SHOW',
};

/**
 * syncronous actions
 */

// create a new party
const addParty = id => ({
  type: constants.ADD_PARTY,
  id,
});

// create a new party
const addCharacter = (partyId, id) => ({
  type: constants.ADD_CHARACTER,
  id,
  partyId,
});

/*
// modify a party at given `path` with new `data`
const change = (id, path, data) => ({
  type: constants.CHANGE,
  id,
  path,
  data,
});

// destroy a party
const destroy = id => ({
  type: constants.DELETE,
  id,
});

// set party as active view
const show = id => ({
  type: constants.SHOW,
  id,
});

/**
 * asyncronous actions
 */
/*
// @NOTE this method will end up asyncronous, requesting data from a remote endpoint.
// for now, it's syncronous.
const index = () => ({
  type: constants.INDEX,
});

/**
 * export
 */
export default {
  addParty,
  addCharacter,
  // change,
  // destroy,
  // show,
  // index,
};
