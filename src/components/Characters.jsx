import React from 'react';
import PropTypes from 'prop-types';
import { generate } from 'shortid';
import { connect } from 'react-redux';

import actions from '../store/actions';

const Characters = ({
  addCharacter, characters, partyId, updateCharacter,
}) => {
  const handleAdd = () => addCharacter(partyId, generate());
  return (
    <div style={{ marginLeft: '3em' }}>
      <p>
        <strong>
          {`Characters (${characters.length})`}
        </strong>
      </p>
      <button type="button" onClick={handleAdd}>
        Add
      </button>
      {
        characters.map(({ id, name }) => {
          const handleNameChange = ({ target }) => {
            const value = target.value || null;
            updateCharacter(partyId, id, 'name', value);
          };
          return (
            <div key={id}>
              <p>
                {`${name || ''} (${id})`}
              </p>
              <label htmlFor="characterName">
                Character Name
                <input id="characterName" onChange={handleNameChange} />
              </label>
            </div>
          );
        })
      }
    </div>
  );
};

Characters.propTypes = {
  addCharacter: PropTypes.func.isRequired,
  updateCharacter: PropTypes.func.isRequired,
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  partyId: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  characters: state.parties.find(party => party.id === ownProps.partyId).characters || [],
});

const mapDispatchToProps = dispatch => ({
  addCharacter: (partyId, id) => dispatch(actions.addCharacter(partyId, id)),
  updateCharacter: (partyId, id, path, value) => dispatch(actions
    .updateCharacter(partyId, id, path, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
