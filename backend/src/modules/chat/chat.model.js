// modules/chat/chat.model.js
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
    chatRoom: { type: mongoose.Schema.Types.ObjectId, ref: "ChatRoom" },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // For 1-on-1 chat
  },
  { timestamps: true }
);

const chatRoomSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    isGroup: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const notificationSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    content: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export const Message = mongoose.model("Message", messageSchema);
export const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);
export const Notification= mongoose.model("Notification", notificationSchema);