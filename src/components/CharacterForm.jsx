import React from 'react';
import PropTypes from 'prop-types';

import schema from '../../schema/character.schema.json';
import Ability from './Ability';

const abilities = schema ? Object.keys(schema.properties.abilities.properties) : {};

const CharacterForm = ({ character, onChange }) => {
  const handleNameChange = ({ target }) => {
    const value = target.value || null;
    onChange('name', value);
  };
  const handleAbilityChange = (ability, { target }) => {
    const valueAsNumber = Number(target.value);
    onChange(ability, valueAsNumber);
  };
  return (
    <div>
      <label htmlFor="characterName">
        Character Name
        <input id="characterName" onChange={handleNameChange} value={character.name || ''} />
      </label>
      {
        abilities.map(ability => (
          <Ability
            key={ability}
            ability={ability}
            character={character}
            onChange={handleAbilityChange}
          />
        ))
      }
    </div>
  );
};

CharacterForm.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CharacterForm;
