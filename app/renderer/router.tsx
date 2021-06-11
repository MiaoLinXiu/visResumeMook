import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ROUTER from '@common/constant/router';
import Root from '@src/container/root';
import ResumeComponent from '@src/container/resume';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTER.root} component={Root} exact />
        <Route path={ROUTER.resume} component={ResumeComponent} />
        <Redirect to={ROUTER.root} />
      </Switch>
    </Router>
  )
}

export default Routes;