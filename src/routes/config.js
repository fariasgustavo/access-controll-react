import React from 'react';
import Login from '../pages/Login';

export const routes = [
    {
        'exact': true,
        'path': '/',
        'component': () => <Login/> 
    }
];