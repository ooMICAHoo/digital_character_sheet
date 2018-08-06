const constants = {
  add: 'CHARACTER_ADD',
  change: 'CHARACTER_CHANGE',
  delete: 'CHARACTER_DELETE',
  show: 'CHARACTER_SHOW',
};

const add = () => ({
  type: constants.add,
});

export default {
  add,
  constants
};
