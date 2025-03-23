// src/components/Profile.jsx
import React, { useEffect, useState } from "react";
import { getUser } from "../apis/Auth_apis/Auth";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";
import { User } from "lucide-react";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getUser();
        setUserData(data);
      } catch (err) {
        setError(err.message || "Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress /> 
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        <Typography variant="h6">Error: {error}</Typography>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent>
          <Typography variant="h5" component="div" className="flex items-center mb-4">
            <User className="mr-2 text-blue-500" />
            User Profile
          </Typography>
          <Typography variant="body1" className="mb-2">
            <strong>Name:</strong> {userData.name}
          </Typography>
          <Typography variant="body1" className="mb-2">
            <strong>Email:</strong> {userData.email}
          </Typography>
          <Typography variant="body1" className="mb-2">
            <strong>Location:</strong> {userData.location}
          </Typography>
          <Typography variant="body1" className="mb-2">
            <strong>Joined:</strong> {new Date(userData.createdAt).toLocaleDateString()}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
