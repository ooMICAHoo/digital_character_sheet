import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { generate } from 'shortid';

import partyActions from '../store/actions';
import Characters from './Characters';

const Party = ({ addCharacter, addParty, parties }) => {
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
        parties.map(({ id, characters }) => (
          <div key={id}>
            <p>
              {id}
            </p>
            <Characters partyId={id} characters={characters} addCharacter={addCharacter} />
          </div>
        ))
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
  })).isRequired,
};

const mapStateToProps = state => ({
  parties: state.parties,
});

const mapDispatchToProps = dispatch => ({
  addParty: id => dispatch(partyActions.addParty(id)),
  addCharacter: (partyId, id) => dispatch(partyActions.addCharacter(partyId, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Party);
