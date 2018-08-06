const constants = {
  add: 'PARTY_ADD',
  change: 'PARTY_CHANGE',
  delete: 'PARTY_DELETE',
  show: 'PARTY_SHOW',
};

const add = () => ({
  type: constants.add,
});

export default {
  add,
  constants
};
