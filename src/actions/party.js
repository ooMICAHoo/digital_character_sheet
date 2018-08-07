/**
 * party actions
 */

/**
 * action type constants
 */
export const constants = {
  ADD: 'PARTY_ADD',
  CHANGE: 'PARTY_CHANGE',
  DESTRY: 'PARTY_DESTROY',
  INDEX: 'PARTY_INDEX',
  SHOW: 'PARTY_SHOW',
};

/**
 * syncronous actions
 */

// create a new party
const add = id => ({
  type: constants.ADD,
  id,
});

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

// @NOTE this method will end up asyncronous, requesting data from a remote endpoint.
// for now, it's syncronous.
const index = () => ({
  type: constants.INDEX,
});

/**
 * export
 */
export default {
  add,
  change,
  destroy,
  show,
  index,
};
