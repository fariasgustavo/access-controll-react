import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={() => <Login />} />
				<PrivateRoute path="/dashboard" component={() => <Login />} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
