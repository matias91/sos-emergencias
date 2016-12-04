'use strict';

const React = require('react');
const HomeNative = require('./home.native');

class Home extends React.Component {
    render() {
        return (
            <HomeNative {...this.props} />
        );
    }
}

module.exports = Home;
