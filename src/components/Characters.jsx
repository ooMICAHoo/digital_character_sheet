import React from 'react';
import PropTypes from 'prop-types';
import { generate } from 'shortid';

const Characters = ({ addCharacter, characters, partyId }) => {
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
        characters.map(({ id }) => (
          <div key={id}>
            <p>
              {id}
            </p>
          </div>
        ))
      }
    </div>
  );
};

Characters.propTypes = {
  addCharacter: PropTypes.func.isRequired,
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })).isRequired,
  partyId: PropTypes.string.isRequired,
};

export default Characters;
