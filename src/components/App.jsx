import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Parties from './Parties';
import Party from './Party';

const App = ({ activeParty }) => (
  <div>
    <h1>
      CREATURE CRAWL
    </h1>
    {/* activeCharacter ? */}
    { activeParty ? (<Party />) : (<Parties />) }
  </div>
);

App.defaultProps = {
  activeParty: null,
};

App.propTypes = {
  activeParty: PropTypes.string,
};

const mapStateToProps = ({ activeParty }) => ({
  activeParty,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
