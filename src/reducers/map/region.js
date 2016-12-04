const actionTypes = require('../../constants/actionTypes');
const Immutable = require('immutable');

function setInitialState() {
    return Immutable.fromJS({
        errorMessage: '',

        // @hardcoded
        region: {
            latitude: -37.317085,
            longitude: -59.141691,
            latitudeDelta: 0.1020,
            longitudeDelta: 0.0751
        }
    });
}

function regionReducer(state = setInitialState(), action) {
    // if (actionTypes[action.type]) {
    //     return actionTypes[action.type](state, action);
    // } else {
    //     return state;
    // }

    switch (action.type) {
        case actionTypes.UPDATE_REGION:
            return state.merge({
                region: action.payload.region
            });
        default:
            return state;
    }
}

module.exports = regionReducer;
