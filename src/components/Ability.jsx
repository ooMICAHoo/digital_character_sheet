import React from 'react';
import PropTypes from 'prop-types';

const Ability = ({ ability, character, onChange }) => (
  <div>
    <label htmlFor={ability} className="character-label">
      {ability}
      <input id={ability} className="ability-input input" onChange={event => onChange(ability, event)} value={character[ability] || ''} />
    </label>
    <p>
      {`${ability.toUpperCase()} Mod: ${character[`${ability}Mod`]}`}
    </p>
  </div>
);

Ability.propTypes = {
  ability: PropTypes.string.isRequired,
  character: PropTypes.shape({
    strength: PropTypes.number,
    strengthMod: PropTypes.number,
    agility: PropTypes.number,
    agilityMod: PropTypes.number,
    stamina: PropTypes.number,
    staminaMod: PropTypes.number,
    personality: PropTypes.number,
    personalityMod: PropTypes.number,
    intelligence: PropTypes.number,
    intelligenceMod: PropTypes.number,
    luck: PropTypes.number,
    luckMod: PropTypes.number,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Ability;
