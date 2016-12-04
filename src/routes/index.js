'use strict';

const React = require('react');
const { Route } = require('react-router');
const { IndexRedirect } = require('react-router');
const AppView = require('./appView/appView');
const HomeView = require('./homeView/homeView');
const ProfileView = require('./profileView/profileView');

const getRoutes = function() {
    return (
        <Route name="app" path="/" component={AppView}>
            <IndexRedirect to="home" />
            <Route name="home" path="home" component={HomeView} />
            <Route name="profile" path="profile" component={ProfileView} />
        </Route>
    )
};

module.exports = getRoutes;
