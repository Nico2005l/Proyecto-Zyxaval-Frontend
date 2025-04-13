import { BACKEND_URL } from '../utils/BackendUrl.js';

export const fetchJars = async () => {
            const token = sessionStorage.getItem('token');
            const response = await fetch(`${BACKEND_URL}/jars`, {
              method: 'GET',
              headers: { token },
            });
            const data = await response.json();
            return data;
        }

export const fetchJar = async (id) => {
            const token = sessionStorage.getItem('token');
            const response = await fetch(`${BACKEND_URL}/jars/${id}`, {
              method: 'GET',
              headers: { token },
            });
            const data = await response.json();
            return data;
        }
export const fetchFlies = async (id) => {
            const token = sessionStorage.getItem('token');
            const response = await fetch(`${BACKEND_URL}/flies/${id}`, {
              method: 'GET',
              headers: { token },
            });
            const data = await response.json();
            return data;
        }
export const createJar = async (name) => {
            const token = sessionStorage.getItem('token');
            const response = await fetch(`${BACKEND_URL}/jars`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', token },
                body: JSON.stringify({ name }),
            });
            const data = await response.json();
            return data;
        };
export const changeJarName = async (name, id) => {
            const token = sessionStorage.getItem('token');
            const response = await fetch(`${BACKEND_URL}/jars/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', token },
                body: JSON.stringify({ name }),
            });
            const data = await response.json();
            return data;
        };
export const deleteJar = async (id) => {
            const token = sessionStorage.getItem('token');
            const response = await fetch(`${BACKEND_URL}/jars/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json', token },
            });
            const data = await response.json();
            return data;
        };
export const createFly = async (jarId, bodyColor) => {
            const token = sessionStorage.getItem('token');
            const response = await fetch(`${BACKEND_URL}/flies`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                            'Cache-Control': 'no-cache', token },
                body: JSON.stringify({ jarId, bodyColor})
            });
            const data = await response.json();
            return data;
        };
export const deleteFly = async (jarId, flyid) => {
            const token = sessionStorage.getItem('token');
            const response = await fetch(`${BACKEND_URL}/flies/${jarId}/${flyid}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json',
                            'Cache-Control': 'no-cache', token },
            });
            const data = await response.json();
            return data;
        };
