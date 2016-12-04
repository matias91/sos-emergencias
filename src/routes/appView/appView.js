'use strict';

const React = require('react');
const { PropTypes } = require('react');
const App = require('../../components/app/app');

class AppView extends React.Component {
    render() {
        return (
            <App children={this.props.children} />
        )
    }
}

AppView.propTypes = {
    children: PropTypes.any
};

module.exports = AppView;
