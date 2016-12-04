const { combineReducers } = require('redux');
const { reducer: router } = require('react-native-router-redux');
const markers = require('./map/markers');
const region = require('./map/region');

const appReducer = combineReducers({
    router,
    markers,
    region
});


const rootReducer = (state, action) => {
    return appReducer(state, action);
}

module.exports = rootReducer;
