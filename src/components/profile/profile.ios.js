'use strict';

const React = require('react');
const ProfileNative = require('./profile.native');

class Profile extends React.Component {
    render() {
        return (
            <ProfileNative {...this.props} />
        );
    }
}

module.exports = Profile;
