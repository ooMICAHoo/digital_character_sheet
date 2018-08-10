import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { generate } from 'shortid';

import actions from '../store/actions';
import Characters from './Characters';

const Party = ({ addParty, parties, updateParty }) => {
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
        parties.map(({ id, name }) => {
          const handleNameChange = ({ target }) => {
            const value = target.value || null;
            updateParty(id, 'name', value);
          };
          return (
            <div key={id}>
              <p>
                {`${name || ''} (${id})`}
              </p>
              <label htmlFor="partyName">
                Party Name
                <input id="partyName" onChange={handleNameChange} />
              </label>
              <Characters partyId={id} />
            </div>
          );
        })
      }
    </div>
  );
};

Party.propTypes = {
  addParty: PropTypes.func.isRequired,
  parties: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  updateParty: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  parties: state.parties,
});

const mapDispatchToProps = dispatch => ({
  addParty: id => dispatch(actions.addParty(id)),
  updateParty: (id, path, value) => dispatch(actions.updateParty(id, path, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Party);
