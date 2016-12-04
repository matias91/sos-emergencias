'use strict';

const React = require('react');
const { PropTypes } = require('react');
const { Link } = require('react-router');

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <header>
                    <h1>Hello World!</h1>
                    <Link to="home">Home</Link>
                    <Link to="profile">Profile</Link>
                </header>
                <section className="app__section">
                    {this.props.children}
                </section>
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.any
};

module.exports = App;
