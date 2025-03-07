import {URL} from './URL.js';

export const checkSession = async () => {
    const token = sessionStorage.getItem('token');
    if (!token) return false;

    const response = await fetch(URL+'/profile', {
        method: 'GET',
        headers: { token },
    });
    return response.ok;
    };