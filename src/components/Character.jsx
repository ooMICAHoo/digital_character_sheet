import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../store/actions';

const Character = ({
  cancelViewCharacter, character, activeParty, updateCharacter,
}) => {
  const handleNameChange = ({ target }) => {
    const value = target.value || null;
    updateCharacter(activeParty, character.id, 'name', value);
  };
  return (
    <div style={{ marginLeft: '3em' }}>
      <button type="button" onClick={() => cancelViewCharacter()}>
        Back
      </button>
      <div key={character.id}>
        <h3>
          {`${character.name || ''} (${character.id})`}
        </h3>
        <label htmlFor="characterName">
          Character Name
          <input id="characterName" onChange={handleNameChange} />
        </label>
      </div>
    </div>
  );
};

Character.propTypes = {
  activeParty: PropTypes.string.isRequired,
  cancelViewCharacter: PropTypes.func.isRequired,
  updateCharacter: PropTypes.func.isRequired,
  character: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  activeParty: state.activeParty,
  character: state.parties.find(party => party.id === state.activeParty).characters
    .find(character => character.id === state.activeCharacter),
});

const mapDispatchToProps = dispatch => ({
  cancelViewCharacter: () => dispatch(actions.cancelViewCharacter()),
  updateCharacter: (partyId, id, path, value) => dispatch(actions
    .updateCharacter(partyId, id, path, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Character);
