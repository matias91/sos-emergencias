'use strict';

const React = require('react');
const MapNative = require('./map.native');

class MapComponent extends React.Component {
    render() {
        return (
            <MapNative {...this.props} />
        );
    }
}

module.exports = MapComponent;
