const actionTypes = require('../../constants/actionTypes');
const Immutable = require('immutable');

const initialState = Immutable.fromJS({
    isFetching: false,
    errorMessage: '',

    // @hardcoded
    markers: [
        {
            title: 'Zaraza',
            description: 'Zaraza Resto-Bar',
            type: 'default',
            latlng: {
                latitude: -37.331843,
                longitude: -59.143391,
            }
        },
        {
            title: 'Saavedra 515',
            description: 'Casa de Chivi y Mati',
            type: 'house',
            latlng: {
                latitude: -37.321108,
                longitude: -59.119697,
            }
        }
    ]
});

function markersReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_MARKERS_REQUEST:
            return state.merge({
                isFetching: true
            });
        case actionTypes.FETCH_MARKERS_SUCCESS:
            return state.merge({
            });
        case actionTypes.FETCH_MARKERS_FAILURE:
            return state.merge({
                errorMessage: 'Fetch failed'
            });
        case actionTypes.ADD_MARKER:
            return state.merge({
                markers: action.payload.marker
            });
        default:
            return state
    }
}

module.exports = markersReducer;
