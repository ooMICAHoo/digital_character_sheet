import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { generate } from 'shortid';

import partyActions from '../store/actions';
import Characters from './Characters';

const Party = ({
  addCharacter, addParty, parties, updateParty,
}) => {
  const handleAdd = () => addParty(generate());
  return (
    <div>
      <h2>
        Party!
      </h2>
      <button type="button" onClick={handleAdd}>
        Add
      </button>
      <hr />
      {
        parties.map(({ id, characters, name }) => {
          const handleNameChange = ({ target }) => {
            const value = target.value || null;
            updateParty(id, 'name', value);
          };
          return (
            <div key={id}>
              <p>
                {`${name || ''} (${id})`}
              </p>
              <input onChange={handleNameChange} placeholder="Name your Party" />
              <Characters partyId={id} characters={characters} addCharacter={addCharacter} />
            </div>
          );
        })
      }
    </div>
  );
};

Party.propTypes = {
  addCharacter: PropTypes.func.isRequired,
  addParty: PropTypes.func.isRequired,
  parties: PropTypes.arrayOf(PropTypes.shape({
    characters: PropTypes.array,
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  updateParty: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  parties: state.parties,
});

const mapDispatchToProps = dispatch => ({
  addParty: id => dispatch(partyActions.addParty(id)),
  addCharacter: (partyId, id) => dispatch(partyActions.addCharacter(partyId, id)),
  updateParty: (id, path, value) => dispatch(partyActions.updateParty(id, path, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Party);
