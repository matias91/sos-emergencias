'use strict';

const React = require('react');
const AppNative = require('./app.native');

class App extends React.Component {
    render() {
        return (
            <AppNative />
        );
    }
}

module.exports = App;
