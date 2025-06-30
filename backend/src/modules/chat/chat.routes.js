// modules/chat/chat.routes.js

import express from "express";
import {
sendMessage,
  getPrivateMessages,
  createGroup,
  getUserGroups,
  getGroupMessages,
  getContacts,
  joinGroup,
  getAllGroups,
} from "./chat.controller.js";
import protect from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/message", protect, sendMessage);
// Get messages between two users
router.get("/private/:userId", protect, getPrivateMessages);

// Create a new group
router.post("/group", protect, createGroup);

// Get all groups for logged-in user
router.get("/groups", protect, getUserGroups);

// Get messages of a group
router.get("/group/:groupId", protect, getGroupMessages);

router.get("/contacts", protect, getContacts)

router.post("/group/:groupId/join", protect, joinGroup);

router.get("/all-groups", protect, getAllGroups);

export default router;
