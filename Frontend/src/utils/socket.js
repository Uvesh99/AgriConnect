import { io } from "socket.io-client";

// This function creates a socket connection with JWT authentication
export const createSocket = (token) =>
  io("http://localhost:5000", {
    auth: { token },
    transports: ["websocket"],
  });