const { createStore, applyMiddleware } = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const rootReducer = require('../reducers');

const middleware = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, middleware);

module.exports = store;
