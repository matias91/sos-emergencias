'use strict';

const React = require('react');
const { StyleSheet, View } = require('react-native');
const { Header, Title } = require('native-base');
const { MapNative } = require('../map/map.native');

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row'
    },
    button: {
        flex: 1
    },
    content: {
        flex: 1
    }
});

class HomeNative extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonText: 'Hide Map',
            showMap: true,
        }

        this.handleButtonPress = this.handleButtonPress.bind(this);
    }

    handleButtonPress() {
        const newButtonText = this.state.showMap ? 'Show Map' : 'Hide Map';

        this.setState({
            showMap: !this.state.showMap,
            buttonText: newButtonText
        });
    }

    render() {
        let mapViewEl;

        if (this.state.showMap) {
            mapViewEl = ( <MapNative /> );
        }

        return (
            <View style={styles.container}>
                <Header style={styles.header}>
                    <Title onPress={this.handleButtonPress}>
                        {this.state.buttonText}
                    </Title>
                </Header>
                <View style={styles.content}>
                    {mapViewEl}
                </View>
            </View>
        );
    }
}

module.exports = HomeNative;
