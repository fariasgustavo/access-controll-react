import axios from 'axios';
import { isAuthorized } from '../services/auth';

const config = {
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json'
    },
}

axios.interceptors.request.use(function (config) {
    if(isAuthorized()){
        const token = localStorage.getItem('token');

        return { ...config, headers: { ...config.headers, 'Authorization': `Bearer ${token}`}}
    } 

    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

const request = (url, method, body) => {
    try {
        return axios({
            method,
            url,
            data: body || [],
            ...config
        });
    } catch (error) {
        console.log(error);
    }
}

export default request;