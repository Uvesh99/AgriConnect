// modules/chat/chat.controller.js

import { Message, ChatRoom } from "./chat.model.js";
import User from "../../models/User.js";
import {Notification} from "./chat.model.js";

// 🔹 Send a message (private or group)
export const sendMessage = async (req, res) => {
  try {
    const { content, receiverId, groupId, replyTo } = req.body;

    if (!content || (!receiverId && !groupId)) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newMessage = new Message({
      sender: req.user._id,
      receiver: receiverId || undefined,
      groupId: groupId || undefined,
      content,
      replyTo: replyTo || undefined,
    });

    await newMessage.save();

     // 🔔 Create Notification
    if (receiverId) {
      await Notification.create({
        sender: req.user._id,
        receiver: receiverId,
        message: newMessage._id,
        content: "You received a new message 📩",
      });
    }

    res.status(201).json(newMessage);
  } catch (err) {
    console.error("Send Message Error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
// 🔸 Create or fetch 1-on-1 chat messages
export const getPrivateMessages = async (req, res) => {
  const { userId } = req.params;
  const currentUserId = req.user.id;

  try {
    const messages = await Message.find({
      $or: [
        { sender: currentUserId, receiver: userId },
        { sender: userId, receiver: currentUserId },
      ],
    })
      .sort({ createdAt: 1 })
      .populate("sender receiver", "name username");

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages." });
  }
};

// 🔸 Create a new group
export const createGroup = async (req, res) => {
  const { name, members } = req.body;

  try {
    const newGroup = new ChatRoom({
      name,
      members : [...(members || []), req.user._id],
      isGroup: true,
    });

    await newGroup.save();
    res.status(201).json(newGroup);
  } catch (error) {
    res.status(500).json({ error: "Failed to create group." });
  }
};

// 🔸 Get all groups for a user
export const getUserGroups = async (req, res) => {
  const userId = req.user.id;

  try {
    const groups = await ChatRoom.find({ members: userId }).populate(
      "members",
      "name username"
    );
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch groups." });
  }
};

// 🔸 Get group messages
export const getGroupMessages = async (req, res) => {
  const { roomId } = req.params;

  try {
    const messages = await Message.find({ chatRoom: roomId })
      .sort({ createdAt: 1 })
      .populate("sender", "name username");

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch group messages." });
  }
};

export const getContacts= async (req, res)=>{
  const userId = req.user._id;
  const messages = await Message.find({
    $or : [{sender: userId}, {receiver: userId}]
  }).populate("sender receiver", "username name")

  const contacts={};
  messages.forEach(msg =>{
    if(msg.sender._id.toString()!==userId.toString()){
      contacts[msg.sender._id]=msg.sender;
    }
    if (msg.receiver._id.toString() !== userId.toString()) {
      contacts[msg.receiver._id] = msg.receiver;
    }
  });
  res.json(Object.values(contacts));
};

export const joinGroup = async (req, res) => {
  const userId = req.user._id;
  const { groupId } = req.params;

  try {
    const group = await ChatRoom.findById(groupId);
    if (!group) {
      return res.status(404).json({ error: "Group not found." });
    }

    // Check if already a member
    if (group.members.some(m => m.toString() === userId.toString())) {
      return res.status(400).json({ error: "Already a member of this group." });
    }

    group.members.push(userId);
    await group.save();

    res.status(200).json({ message: "Joined group successfully.", group });
  } catch (error) {
    res.status(500).json({ error: "Failed to join group." });
  }
};

export const getAllGroups = async (req, res) => {
  try {
    const groups = await ChatRoom.find({ isGroup: true }).populate(
      "members",
      "name username"
    );
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch all groups." });
  }
};