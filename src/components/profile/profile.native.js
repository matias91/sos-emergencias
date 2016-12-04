'use strict';

const React = require('react');
const { TouchableHighlight, Text, View } = require('react-native');

class ProfileNative extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Text>Hello from { this.props.name }</Text>
                <TouchableHighlight onPress={ () => this.props.navigator.pop() }>
                    <Text>Go Back</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

module.exports = ProfileNative;
