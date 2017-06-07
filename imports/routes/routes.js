import React from 'react';
import { Router, Route, Switch, Link as RouterLink } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

import Signup from './../ui/Signup';
import Link from './../ui/Link';
import Login from './../ui/Login';
import { UnauthRoute, AuthRoute } from './routetypes.js';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

export const onAuthChange = (isAuthenticated) => {
    const pathname = history.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);

    if (isUnauthenticatedPage && isAuthenticated) {
        history.replace('/links');
    } else if (isAuthenticatedPage && !isAuthenticated) {
        history.replace('/');
    }
}

export const routes = (
  <Router history={history}>
    <div>
      <Switch>
        <UnauthRoute exact path="/" component={Login}/>
        <UnauthRoute path="/signup" component={Signup}/>
        <AuthRoute path="/links" component={Link}/>
        <Route render={() => (
          <div className="boxed-view">
            <div className="boxed-view__box">
              <h1>Page Not Found</h1>
              <p>Hmmm, we're unable to find that page.</p>
              <RouterLink className="button button--link" to="/">Head Home</RouterLink>
            </div>
          </div>
        )}/>
      </Switch>
    </div>
  </Router>
);