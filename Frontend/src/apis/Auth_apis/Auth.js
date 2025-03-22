import axios from 'axios';

const API_URL = 'https://agriconnect-api-zylb.onrender.com';

export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/api/auth/register`, userData);
    console.log(response);
    return response.data;
};

export const loginUser = async (userData) => {
    const response = await axios.post(`${API_URL}/api/auth/login`, userData);
    return response.data;
};