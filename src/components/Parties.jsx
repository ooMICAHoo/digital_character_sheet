import React from 'react';
import PropTypes from 'prop-types';
import { generate } from 'shortid';
import { connect } from 'react-redux';

import actions from '../store/actions';

const Parties = ({ addParty, parties, viewParty }) => {
  const handleAdd = () => addParty(generate());
  return (
    <div className="button-layout">
      <button className="main-button" type="button" onClick={handleAdd}>
        Add Party
      </button>
      {
        parties.map(({ id, name }) => (
          <button className="main-button" key={id} type="button" onClick={() => viewParty(id)}>
            {`${name || 'Untitled'} (${id})`}
          </button>
        ))
      }
    </div>
  );
};

Parties.propTypes = {
  addParty: PropTypes.func.isRequired,
  parties: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  viewParty: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  parties: state.parties,
});

const mapDispatchToProps = dispatch => ({
  addParty: id => dispatch(actions.addParty(id)),
  viewParty: id => dispatch(actions.viewParty(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Parties);
