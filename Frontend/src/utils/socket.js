import { io } from "socket.io-client";

// This function creates a socket connection with JWT authentication
export const createSocket = (token) =>
  io("http://agriconnect-backend-env.eba-mzszbuas.ap-south-1.elasticbeanstalk.com", {
    auth: { token },
    transports: ["websocket"],
  });