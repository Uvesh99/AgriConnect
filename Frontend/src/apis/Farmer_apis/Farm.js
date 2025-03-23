import axios from 'axios';

const API_URL = 'https://agriconnect-backend-oumj.onrender.com'; 

export const uploadFarmVerification = async (formData) => {
  try {
    
    const response = await axios.post(
      `${API_URL}/api/farm-verification/upload`, 
      formData, 
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data; 
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    throw error; 
  }
};
