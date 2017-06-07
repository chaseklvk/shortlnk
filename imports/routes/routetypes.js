import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Route, Redirect } from 'react-router-dom';

export const UnauthRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    !Meteor.userId() ? 
      <Component {...props}/>
    :
      <Redirect to="/links"/> 
  )}/>
);

export const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Meteor.userId() ?
      <Component {...props}/>
    :
      <Redirect to="/"/>
  )}/> 
);