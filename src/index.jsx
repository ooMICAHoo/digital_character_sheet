import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './store/reducers';
import App from './components/App';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  global.window.__REDUX_DEVTOOLS_EXTENSION__ && global.window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable no-underscore-dangle */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  global.document.getElementById('root'),
);
