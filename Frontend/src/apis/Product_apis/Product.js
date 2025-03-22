import axios from 'axios';

const API_URL = 'https://agriconnect-api-zylb.onrender.com';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/products/`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; 
  }
};

export const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/api/products/${productId}`);
  return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error; 
  }
  
};

export const addProduct = async (formData) => {
    try {
      const token = localStorage.getItem("authToken"); 
      const response = await axios.post(
        `${API_URL}/api/products/`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}` 
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      throw error;
    }
  };

export const updateProduct = async (productId, productData) => {
  const authToken = localStorage.getItem("authToken");
    const response = await axios.put(`${API_URL}/api/products/${productId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify(productData),
    });
  
    if (!response.ok) {
      throw new Error('Failed to update product');
    }
  
    return await response.json();
  };
  
export const deleteProduct = async (productId) => {
  const authToken = localStorage.getItem("authToken");
  const response = await axios.delete(`${API_URL}/api/products/${productId}`, {
      headers: {
      'Authorization': `Bearer ${authToken}`, 
    },
    });
  
    if (!response.ok) {
      throw new Error('Failed to delete product');
    }
  };