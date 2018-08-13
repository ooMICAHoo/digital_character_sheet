import React from 'react';
import PropTypes from 'prop-types';
import { generate } from 'shortid';
import { connect } from 'react-redux';

import actions from '../store/actions';

const Parties = ({ addParty, parties, viewParty }) => {
  const handleAdd = () => addParty(generate());
  if (parties.length > 0) {
    return (
      <div>
        <p className="helpful-text">
          Select a party or start a new one.
        </p>
        <div className="button-layout">
          {
            parties.map(({ id, name }) => (
              <button className="main-button" key={id} type="button" onClick={() => viewParty(id)}>
                {`${name || 'Untitled'}`}
              </button>
            ))
          }
          <button className="main-button add-button" type="button" title="Create a new party" onClick={handleAdd}>
            +
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <p className="welcome">
        Welcome adventurer!
        To begin a party and start creating your characters, click the + button below.
      </p>
      <div className="button-layout">
        {
          parties.map(({ id, name }) => (
            <button className="main-button" key={id} type="button" onClick={() => viewParty(id)}>
              {`${name || 'Untitled'}`}
            </button>
          ))
        }
        <button className="main-button add-button" type="button" title="Create a new party" onClick={handleAdd}>
          +
        </button>
      </div>
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
