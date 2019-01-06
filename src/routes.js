import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Componentes
import App from './App';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route path="/" component="{Home}"/>
    </Switch
  </App>;

export default AppRoutes;
