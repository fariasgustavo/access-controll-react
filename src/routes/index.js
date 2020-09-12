import React from "react";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import { routes } from './config';

console.log(routes);

const Routes = () => (
    <BrowserRouter>
      <Switch>
        {routes.map(route => (
            <Route exact={route.exact} path={route.path} component={route.component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;