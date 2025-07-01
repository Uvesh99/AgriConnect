import axios from 'axios';

const API_URL = 'http://agriconnect-backend-env.eba-mzszbuas.ap-south-1.elasticbeanstalk.com';

export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/api/auth/register`, userData);
    console.log(response);
    return response.data;
};

export const loginUser = async (userData) => {
    const response = await axios.post(`${API_URL}/api/auth/login`, userData);
    return response.data;
};

export const getUser = async () => {
    const authToken = localStorage.getItem("authToken");
    try {
        const response = await axios.get(`${API_URL}/api/user/profile`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};