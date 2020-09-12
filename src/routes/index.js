import React from "react";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import { routes } from './config';

const Routes = () => (
    <BrowserRouter>
      <Switch>
        {routes.map(route => (
            <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;