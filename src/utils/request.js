import axios from 'axios';

const config = {
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json'
    },
}

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