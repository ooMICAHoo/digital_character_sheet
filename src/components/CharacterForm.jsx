import React from 'react';
import PropTypes from 'prop-types';

const CharacterForm = ({ character, onChange }) => {
  const handleNameChange = ({ target }) => {
    const value = target.value || null;
    onChange('name', value);
  };
  const handleSTRChange = ({ target }) => {
    const value = target.value || null;
    onChange('strength', value);
  };
  return (
    <div>
      <label htmlFor="characterName">
        Character Name
        <input id="characterName" onChange={handleNameChange} value={character.name || ''} />
      </label>
      <label htmlFor="strength">
        Strength
        <input id="strength" onChange={handleSTRChange} value={character.strength || ''} />
      </label>
    </div>
  );
};

CharacterForm.propTypes = {
  character: PropTypes.shape({
    // id: PropTypes.string,
    // name: PropTypes.string,
    strength: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CharacterForm;
