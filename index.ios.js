'use strict';

// it is important to import the react package before anything else
const React = require('react');
const { AppRegistry } = require('react-native');
const AppContainer = require('./src/routes/index.native');

AppRegistry.registerComponent('nativeTest', () => AppContainer);
