import React from 'react';
import { Route } from 'react-router-dom';
import Modal from './Modal';

const RouterModal = props => (
  <Route path={props.path}>
    {routerProps => (
      <Modal
        {...props}
        isOpen={routerProps.match}
        onClose={() => routerProps.history.goBack()}
      />
    )}
  </Route>
);

export default RouterModal;
