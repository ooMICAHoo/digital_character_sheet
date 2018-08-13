import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../store/actions';
import Characters from './Characters';

const Party = ({ cancelViewParty, party: { id, name }, updateParty }) => {
  const handleNameChange = ({ target }) => {
    const value = target.value || null;
    updateParty(id, 'name', value);
  };
  return (
    <div>
      <button className="back-button" type="button" onClick={() => cancelViewParty()}>
        &lt;
      </button>
      <br />
      <br />
      <label htmlFor="partyName">
        <input id="partyName" className="input party-name-input" placeholder={`${name || 'Party Name'}`} onChange={handleNameChange} />
      </label>
      <br />
      <p className="helpful-text">
        Create a new character or view an existing one
      </p>
      <Characters partyId={id} />
    </div>
  );
};

Party.propTypes = {
  cancelViewParty: PropTypes.func.isRequired,
  party: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  updateParty: PropTypes.func.isRequired,
};

const mapStateToProps = ({ activeParty, parties }) => ({
  party: parties.find(party => activeParty === party.id),
});

const mapDispatchToProps = dispatch => ({
  cancelViewParty: () => dispatch(actions.cancelViewParty()),
  updateParty: (id, path, value) => dispatch(actions.updateParty(id, path, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Party);
