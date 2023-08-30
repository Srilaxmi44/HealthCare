/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import {AppRegistry} from 'react-native';
import App from './App';
import React, {Suspense} from 'react';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './redux/store/Store';

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);
