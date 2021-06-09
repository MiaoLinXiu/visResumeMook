import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Root from './container/root';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Root} exact />
      </Switch>
    </Router>
  )
}

export default Routes;