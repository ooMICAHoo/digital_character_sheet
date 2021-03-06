import React from 'react';
import PropTypes from 'prop-types';
import { generate } from 'shortid';
import { connect } from 'react-redux';

import actions from '../store/actions';

const Characters = ({
  addCharacter, characters, partyId, viewCharacter,
}) => {
  const handleAdd = () => addCharacter(partyId, generate());
  return (
    <div>
      <div className="button-layout">
        {
          characters.map(({ id, name }) => (
            <button className="main-button" key={id} type="button" onClick={() => viewCharacter(id)}>
              {`${name || 'Untitled'}`}
            </button>
          ))
        }
        <button className="main-button add-button" type="button" title="Create a new Character" onClick={handleAdd}>
          +
        </button>
      </div>
    </div>
  );
};

Characters.propTypes = {
  addCharacter: PropTypes.func.isRequired,
  viewCharacter: PropTypes.func.isRequired,
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
  viewCharacter: id => dispatch(actions.viewCharacter(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
