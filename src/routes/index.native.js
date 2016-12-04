'use strict';

const React = require('react');
const { Provider } = require('react-redux');
const store = require('../store/configureStore');

const { AppView } = require('./appView/appView.native');

class AppContainer extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppView />
            </Provider>
        );
    }
}

module.exports = AppContainer;
