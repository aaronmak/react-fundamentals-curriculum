var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require('../containers/Main');

import { hashHistory } from 'react-router'

var routes = (
  <Router history={hashHistory} >
    <Route path='/' component={Main}>
    </Route>
  </Router>
);

module.exports = routes;
