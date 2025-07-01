import { io } from "socket.io-client";

// This function creates a socket connection with JWT authentication
export const createSocket = (token) =>
  io("https://agriconnect-backend-oumj.onrender.com", {
    auth: { token },
    transports: ["websocket"],
  });