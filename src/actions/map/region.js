const actionTypes = require('../../constants/actionTypes');

function updateRegion(region) {
    return {
        type: actionTypes.UPDATE_REGION,
        payload: {
            region
        }
    }
}

module.exports = {
    updateRegion
};
