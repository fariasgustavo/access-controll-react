import request from './utils/request';

export async function submitLogin(body){
    return request('/login','POST', body);
}