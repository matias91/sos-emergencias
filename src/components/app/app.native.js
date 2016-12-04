'use strict';

const React = require('react');
// const { StyleSheet, Navigator, TouchableOpacity, Text } = require('react-native');
const { Navigator } = require('react-native');

const { Provider } = require('react-redux');
const store = require('../../store/configureStore');

const Home = require('../home/home');

// const styles = StyleSheet.create({
//     navBar: {
//         flex: 1,
//         backgroundColor: 'red'
//     },
//     navBarText: {
//         fontSize: 18,
//         marginVertical: 10
//     },
//     navBarTitleText: {
//         fontWeight: '500',
//         marginVertical: 9,
//         textAlign: 'center',
//         flex: 1
//     },
//     navBarLeftButton: {
//         paddingLeft: 10
//     }
// });

class AppNative extends React.Component {
    renderScene(route, navigator) {
        const Component = route.component;

        return (
            <Component
                {...this.props}
                {...route.passProps}
                navigator={navigator}
            />
        )
    }

    // buildNavigationBar() {
    //     const navigationBarRouteMapper = {
    //         LeftButton(route, navigator, index) {
    //             if (index > 0) {
    //                 return (
    //                     <TouchableOpacity
    //                         style={styles.navBarLeftButton}
    //                         onPress={() => { if (index > 0) { navigator.pop() } }}
    //                     >
    //                         <Text style={styles.navBarText}>Back</Text>
    //                     </TouchableOpacity>
    //                 )
    //             } else return null;
    //         },
    //         RightButton() {
    //             return null;
    //         },
    //         Title() {
    //             return <Text style={[styles.navBarText, styles.navBarTitleText]}>App Title</Text>
    //         }
    //     };

    //     return (
    //         <Navigator.NavigationBar
    //             style={styles.navBar}
    //             routeMapper={navigationBarRouteMapper}
    //         />
    //     )
    // }

    render() {
        // const navigationBar = this.buildNavigationBar();

        return (
            <Provider store={store}>
                <Navigator
                    style={{flex: 1}}
                    initialRoute={{ component: Home }}
                    renderScene={this.renderScene}
                />
            </Provider>
        );
    }
}

module.exports = AppNative;
