// modules/chat/socket.js
import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import { Message, ChatRoom } from "./chat.model.js";
import User from "../../models/User.js"; // Your User model path

let io;

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*", // Update in prod
      methods: ["GET", "POST"],
    },
  });

  io.use(async (socket, next) => {
    const token = socket.handshake.auth?.token;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.user = decoded; // Attach user info
      next();
    } catch (err) {
      return next(new Error("Authentication error"));
    }
  });

  io.on("connection", (socket) => {
    console.log(`🟢 User connected: ${socket.user.id}`);

    socket.on("joinRoom", (roomId) => {
      socket.join(roomId);
    });

    socket.on("sendMessage", async ({ receiverId, content, roomId }) => {
      const newMessage = new Message({
        sender: socket.user.id,
        content,
        receiver: receiverId,
        chatRoom: roomId || null,
      });

      await newMessage.save();

      // Emit to room or user
      io.to(socket.user.id).emit("newMessage", newMessage);
      if (roomId) {
        io.to(roomId).emit("newMessage", newMessage);
      } else {
        io.to(receiverId).emit("newMessage", newMessage);
      }
    });

    socket.on("disconnect", () => {
      console.log(`🔴 User disconnected: ${socket.user.id}`);
    });
  });
};

export { io };
