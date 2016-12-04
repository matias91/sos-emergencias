'use strict';

// it is important to import the react-native package before anyhting else
const { AppRegistry } = require('react-native');
const AppContainer = require('./src/routes/index.native');

AppRegistry.registerComponent('nativeTest', () => AppContainer);
