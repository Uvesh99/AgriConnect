// // modules/chat/socket.js
// import { Server } from "socket.io";
// import jwt from "jsonwebtoken";
// import { Message, ChatRoom } from "./chat.model.js";
// import User from "../../models/User.js"; // Your User model path

// let io;

// export const initSocket = (server) => {
//   io = new Server(server, {
//     cors: {
//       origin: "*", // Update in prod
//       methods: ["GET", "POST"],
//     },
//   });

//   io.use(async (socket, next) => {
//     const token = socket.handshake.auth?.token;
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       socket.user = decoded; // Attach user info
//       next();
//     } catch (err) {
//       return next(new Error("Authentication error"));
//     }
//   });

//   io.on("connection", (socket) => {
//     console.log(`🟢 User connected: ${socket.user.id}`);

//     socket.on("joinRoom", (roomId) => {
//       socket.join(roomId);
//     });

//     socket.on("sendMessage", async ({ receiverId, content, roomId }) => {
//       const newMessage = new Message({
//         sender: socket.user.id,
//         content,
//         receiver: receiverId,
//         chatRoom: roomId || null,
//       });

//       await newMessage.save();

//       // Emit to room or user
//       io.to(socket.user.id).emit("newMessage", newMessage);
//       if (roomId) {
//         io.to(roomId).emit("newMessage", newMessage);
//       } else {
//         io.to(receiverId).emit("newMessage", newMessage);
//       }
//     });

//     socket.on("disconnect", () => {
//       console.log(`🔴 User disconnected: ${socket.user.id}`);
//     });
//   });
// };

// export { io };


import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import { Message, ChatRoom } from "./chat.model.js";
import User from "../../models/User.js";

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
      socket.user = decoded;
      next();
    } catch (err) {
      return next(new Error("Authentication error"));
    }
  });

  io.on("connection", (socket) => {
    console.log(`🟢 User connected: ${socket.user.id}`);

    // Join a group room
    socket.on("joinGroup", (groupId) => {
      socket.join(groupId);
    });

    // Leave a group room
    socket.on("leaveGroup", (groupId) => {
      socket.leave(groupId);
    });

    // Send a group message
    socket.on("sendGroupMessage", async ({ roomId, content }) => {
      if (!roomId || !content) return;
      // Save message to DB
      const newMessage = new Message({
        sender: socket.user.id,
        groupId: roomId,
        content,
      });
      await newMessage.save();

      // Optionally populate sender for frontend display
      const populatedMsg = await newMessage.populate("sender", "username name");

      // Emit to all users in the group room
      io.to(roomId).emit("newGroupMessage", {
        ...populatedMsg.toObject(),
        chatRoom: roomId, // for frontend matching
      });
    });

    // (Optional) Private chat logic
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