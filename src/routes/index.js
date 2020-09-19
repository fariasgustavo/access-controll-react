import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

import PrivateRoute from "./PrivateRoute";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={() => <Login />} />
				<PrivateRoute path="/dashboard" component={() => <Dashboard />} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
