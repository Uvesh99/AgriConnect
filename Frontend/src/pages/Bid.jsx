import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { BidProduct } from '../apis/Product_apis/Product';

// Function to fetch product bids
const GetBigProducts = async (productId) => {
  const response = await fetch(`https://agriconnect-backend-oumj.onrender.com/api/bid/${productId}`);
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  return response.json();
};

function Bid() {
  const { productId } = useParams();
  const [price, setPrice] = useState('');
  const [bids, setBids] = useState([]);
  const [error, setError] = useState(null); // To store errors

  useEffect(() => {
    const getProductBids = async () => {
      try {
        const bidDetails = await GetBigProducts(productId);
        setBids(bidDetails); 
      } catch (error) {
        setError(error.message);
        console.error('Failed to fetch bids', error);
      }
    };

    getProductBids();
  }, [productId]);

  const handleBidAmu = async (e) => {
    e.preventDefault();  
    try {
      const response = await BidProduct(productId, price);
      console.log(response);
     
      setBids([...bids, { userId: { name: 'You' }, price, createdAt: new Date(), updatedAt: new Date() }]); // Update local state for new bid
      
     
      setPrice('');
    } catch (error) {
      console.log(error);
     
    }
  };

  if (error) {
    return <Typography color="error">{`Error: ${error}`}</Typography>;
  }

  return (
    <>
      
      <Card className="shadow-lg p-4 rounded-2xl mb-4">
        <Typography variant="h5" className="mb-4 font-bold">Place Your Bid</Typography>
        <form className="flex flex-col gap-4" onSubmit={handleBidAmu}>
          <TextField
            label="Bid Amount"
            variant="outlined"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <Button variant="contained" color="primary" type="submit">Place Bid</Button>
        </form>
      </Card>

      
      <div className="p-4 max-w-md mx-auto">
        {bids.length === 0 ? (
          <Typography variant="h6">No bids available for this product.</Typography>
        ) : (
          bids.map((bid) => (
            <Card key={bid._id} className="shadow-lg mb-2">
              <CardContent>
                <Typography variant="h5">Bid Details:</Typography>
                <Typography variant="body1"><strong>Bidder Name:</strong> {bid.userId.name}</Typography>
                <Typography variant="body1"><strong>Bid Amount:</strong> ${bid.price}</Typography>
                <Typography variant="body1"><strong>Created At:</strong> {new Date(bid.createdAt).toLocaleString()}</Typography>
                <Typography variant="body1"><strong>Updated At:</strong> {new Date(bid.updatedAt).toLocaleString()}</Typography>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </>
  );
}

export default Bid;