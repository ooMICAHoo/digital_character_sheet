import React from 'react';
import PropTypes from 'prop-types';

const CharacterForm = ({ character, onChange }) => {
  const handleNameChange = ({ target }) => {
    const value = target.value || null;
    onChange('name', value);
  };
  const handleSTRChange = ({ target }) => {
    const valueAsNumber = Number(target.value);
    const value = valueAsNumber || null;
    console.log(target.value);
    console.log(valueAsNumber);
    console.log(value);
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
      <p>
        {`Strength Mod: ${character.strengthMod}`}
      </p>
    </div>
  );
};

CharacterForm.propTypes = {
  character: PropTypes.shape({
    // id: PropTypes.string,
    name: PropTypes.string,
    strength: PropTypes.string,
    strengthMod: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CharacterForm;
