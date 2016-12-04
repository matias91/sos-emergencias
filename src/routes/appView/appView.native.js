'use strict';

const React = require('react');
const { bindActionCreators } = require('redux');
const { connect } = require('react-redux');
const {
    actions: routerActions,
    Router,
    Route,
    Schema,
    NavBar,
    TabRoute,
    TabBar
} = require('react-native-router-redux');

const HomeView = require('../homeView/homeView');
const ProfileView = require('../profileView/profileView');
const FiltersView = require('../filtersView/filtersView');

const mapStateToProps = state => ({
    router: state.router,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        ...routerActions,
    }, dispatch),
    dispatch
});

const defaultSchema = {
    navBar: NavBar,
    navLeftColor: '#FFFFFF',
    navTint: '#224655',
    navTitleColor: '#FFFFFF',
    navTitleStyle: {
        fontFamily: 'Avenir Next',
        fontSize: 18,
    },
    statusStyle: 'light-content',
    tabBar: TabBar,
};

const assets = {
    'home': require('../../assets/images/thin-0046_home_house.png'),
    'profile': require('../../assets/images/thin-0091_file_profile_user_personal.png')
};

class AppView extends React.Component {
    render() {
        return (
            <Router {...this.props} assets={assets} initial="Home">
                <Schema name="default" {...defaultSchema} />

                <TabRoute name="tabBar">
                    <Route name="Home" component={HomeView} title="Home" tabItem={{icon: assets['home'], title: 'Home'}} />
                    <Route name="Filters" component={FiltersView} title="Filters" tabItem={{icon: assets['profile'], title: 'Filters'}} />
                    <Route name="Profile" component={ProfileView} title="Profile" tabItem={{icon: assets['profile'], title: 'Profile'}} />
                </TabRoute>
            </Router>
        );
    }
}

module.exports.AppView = connect(mapStateToProps, mapDispatchToProps)(AppView);
