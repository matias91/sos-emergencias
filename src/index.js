'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const { Router, hashHistory } = require('react-router');

import getRoutes from './routes';

ReactDOM.render(
    <Router history={hashHistory}>
        {getRoutes()}
    </Router>,
    document.getElementById('content')
);
