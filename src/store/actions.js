export const constants = {
  ADD_CHARACTER: 'ADD_CHARACTER',
  ADD_PARTY: 'ADD_PARTY',
  CANCEL_VIEW_PARTY: 'CANCEL_VIEW_PARTY',
  UPDATE_CHARACTER: 'UPDATE_CHARACTER',
  UPDATE_PARTY: 'UPDATE_PARTY',
  VIEW_PARTY: 'VIEW_PARTY',
};

const addCharacter = (partyId, id) => ({
  type: constants.ADD_CHARACTER,
  id,
  partyId,
});

const addParty = id => ({
  type: constants.ADD_PARTY,
  id,
});

const cancelViewParty = () => ({
  type: constants.CANCEL_VIEW_PARTY,
});

const updateCharacter = (partyId, id, path, value) => ({
  type: constants.UPDATE_CHARACTER,
  partyId,
  id,
  path,
  value,
});

const updateParty = (id, path, value) => ({
  type: constants.UPDATE_PARTY,
  id,
  path,
  value,
});

const viewParty = id => ({
  type: constants.VIEW_PARTY,
  id,
});

export default {
  addCharacter,
  addParty,
  cancelViewParty,
  updateCharacter,
  updateParty,
  viewParty,
};
