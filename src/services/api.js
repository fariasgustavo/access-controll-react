import request from '../utils/request';

export async function login(body) {
    return request('/login', 'POST', body);
}