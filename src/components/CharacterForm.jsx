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
    <div className="character-form">
      <label htmlFor="characterName" className="character-label">
        <input id="characterName" className="character-input" placeholder="Character Name" onChange={handleNameChange} value={character.name || ''} />
      </label>
      <label htmlFor="strength" className="character-label">
        <input id="strength" className="character-input" placeholder="Strength" onChange={handleSTRChange} value={character.strength || ''} />
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
