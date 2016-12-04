'use strict';

const React = require('react');
const { PropTypes } = require('react');
const { connect } = require('react-redux');
const { StyleSheet } = require('react-native');
const MapView = require('react-native-maps');
const regionActions = require('../../actions/map/region');

const houseTmb = require('../../assets/images/house.png');

// const MaterialIcons = require('react-native-vector-icons/MaterialIcons');

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});

class MapNative extends React.Component {
    constructor(props) {
        super(props);

        this.handleRegionChange = this.handleRegionChange.bind(this);
        this.buildMarkers = this.buildMarkers.bind(this);
    }

    // componentWillMount() {
    //     MaterialIcons.getImageSource('home').then(
    //         (source) => this.setState({ houseIcon: source }),
    //         (error) => this.setState({ getImageError: error })
    //     );
    // }

    handleRegionChange(region) {
        this.props.updateRegion(region);
    }

    buildMarkers() {
        const { immMarkers } = this.props;
        return immMarkers.get('markers').map((marker, index) => {
            const latlng = marker.get('latlng').toJS();
            const title = marker.get('title');
            const description = marker.get('description');
            const type = marker.get('type');

            let imgSrc;

            if (type !== 'default') {
                switch (type) {
                    case 'house':
                        imgSrc = houseTmb;
                        break;
                    default:
                        break;
                }
            }

            return (
                <MapView.Marker
                    coordinate={latlng}
                    title={title}
                    description={description}
                    image={imgSrc}
                    key={index}
                />
            );
        }, this)
    }

    render() {
        const { immRegion } = this.props;
        const immCoordinates = immRegion.get('region');
        const region = {
                latitude: immCoordinates.get('latitude'),
                longitude: immCoordinates.get('longitude'),
                latitudeDelta: immCoordinates.get('latitudeDelta'),
                longitudeDelta: immCoordinates.get('longitudeDelta')
            }
        const markers = this.buildMarkers();

        return (
            <MapView
                style={styles.map}
                region={region}
                onRegionChange={this.handleRegionChange}
                showsUserLocation={true}
                toolbarEnabled={true}
                loadingEnabled={true}
            >
                {markers}
            </MapView>
        );
    }
}

MapNative.propTypes = {
    immMarkers: PropTypes.object.isRequired,
    immRegion: PropTypes.object.isRequired,
    updateRegion: PropTypes.func.isRequired
};

module.exports.MapNative = connect((state) => ({
    immMarkers: state.markers,
    immRegion: state.region
}),{
    updateRegion: regionActions.updateRegion,
})(MapNative);
