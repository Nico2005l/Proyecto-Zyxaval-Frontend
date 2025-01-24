export const checkSession = async () => {
    const token = sessionStorage.getItem('token');
    if (!token) return false;

    const response = await fetch('http://localhost:5000/profile', {
        method: 'GET',
        headers: { token },
    });
    return response.ok;
    };