import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

import Header from './components/Header';

export default class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Header}>
        </Route>
      </Router>
    );
  }
}
