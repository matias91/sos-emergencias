const actionTypes = require('../../constants/actionTypes');

function addMarker(marker) {
    return {
        type: actionTypes.ADD_MARKER,
        payload: {
            marker
        }
    }
}

module.exports = {
    addMarker
};
