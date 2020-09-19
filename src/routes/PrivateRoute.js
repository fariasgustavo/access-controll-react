import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthorized } from '../services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log(rest);
    return (
        <Route 
            {...rest}
            render={props => 
                isAuthorized() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
}

export default PrivateRoute;