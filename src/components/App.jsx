import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Character from './Character';
import Parties from './Parties';
import Party from './Party';

require('../favicon.ico');
require('../styles.css');

const App = ({ activeCharacter, activeParty }) => {
  let component = (<Parties />);
  if (activeParty && !activeCharacter) {
    component = (<Party />);
  }
  if (activeParty && activeCharacter) {
    component = (<Character />);
  }
  return (
    <div className="app">
      <p className="header">
        Creature Crawl
      </p>
      {component}
    </div>
  );
};

App.defaultProps = {
  activeCharacter: null,
  activeParty: null,
};

App.propTypes = {
  activeCharacter: PropTypes.string,
  activeParty: PropTypes.string,
};

const mapStateToProps = ({ activeCharacter, activeParty }) => ({
  activeCharacter,
  activeParty,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
