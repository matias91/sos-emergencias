'use strict';

const React = require('react');
// const Filters = require('../../components/filters/filters');
const { Text, View } = require('react-native');

class FiltersView extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Text>Filters</Text>
            </View>
        )
    }
}

module.exports = FiltersView;
