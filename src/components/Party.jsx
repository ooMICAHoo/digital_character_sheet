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
      <p>
        {`${name || 'Untitled'} (${id})`}
      </p>
      <label htmlFor="partyName">
        Party Name
        <input id="partyName" onChange={handleNameChange} />
      </label>
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
