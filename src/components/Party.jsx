import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { generate } from 'shortid';


import partyActions from '../actions/party';

const Party = ({ onAdd, parties }) => {
  const handleAdd = () => onAdd(generate());
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
        parties.map(party => (
          <p key={party}>
            {party}
          </p>
        ))
      }
    </div>
  );
};

Party.propTypes = {
  onAdd: PropTypes.func.isRequired,
  parties: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  parties: state.party,
});

const mapDispatchToProps = dispatch => ({
  onAdd: id => dispatch(partyActions.add(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Party);
