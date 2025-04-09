import {BACKEND_URL} from './BackendUrl.js';

export const checkSession = async () => {
    const token = sessionStorage.getItem('token');
    if (!token) return false;

    const response = await fetch(`${BACKEND_URL+'/profile'}`, {
        method: 'GET',
        headers: { token },
    });
    return response.ok;
    };