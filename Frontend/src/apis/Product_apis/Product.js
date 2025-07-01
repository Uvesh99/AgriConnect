import axios from 'axios';

const API_URL = 'http://agriconnect-backend-env.eba-mzszbuas.ap-south-1.elasticbeanstalk.com';

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
  
export const createOrder = async (productId, quantity) => {
  const authToken = localStorage.getItem("authToken");
  try {
    const response = await axios.post(`${API_URL}/api/orders/`, {
      productId: productId,
      quantity: quantity,
    }, {
      headers: {
        'Authorization': `Bearer ${authToken}`, 
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const BidProduct = async (productId, bidAmount) => {
  const authToken = localStorage.getItem("authToken");
  try {
    const response = await axios.post(`${API_URL}/api/bid`, {
      productId: productId,
      price: bidAmount,
    }, {
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error creating bid:', error);
    throw error;
  }
};


export const GetBigProducts = async (productId) => {
  try {
    console.log(productId);
    
    const response = await axios.get(`${API_URL}/api/bid/${productId}`);
    console.log(response);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return response.data;
  } catch (error) {
    console.error('Error creating bid:', error);
    throw error;
  }
  };

export const submitReview = async (productId, rating, review) => {
  const token = localStorage.getItem('authToken'); 
 
  const config = {
      headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json'
      }
  };
    try {
        const response = await axios.post(`${API_URL}/api/review`, {
            productId,
            rating,
            review
        },config);
        return response.data; 
    } catch (error) {
        console.error('Error submitting review:', error);
        throw error; 
    }
};

export const getAllReviews = async (productId) => {
  
  try {
    const response = await axios.get(`${API_URL}/api/review/${productId}`);
   
    console.log(response)
    if (response.status !== 200) {
      throw new Error('Failed to fetch reviews');
    }
   
    return response.data; 
  } catch (error) {
    console.error('Error fetching reviews:', error.message);
    throw new Error('An error occurred while fetching reviews.');
  }
};
