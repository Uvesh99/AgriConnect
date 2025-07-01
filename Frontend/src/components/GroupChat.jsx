import React, { useEffect, useRef, useState } from "react";
import { createSocket } from "../utils/socket.js";
import axios from "axios";

function GroupChat({ currentUser, selectedGroup, token, isMember, handleJoinGroup, joining, error }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Fetch group chat history
  useEffect(() => {
    if (!selectedGroup || !isMember(selectedGroup)) {
      setMessages([]);
      return;
    }
    axios
      .get(
        `https://agriconnect-backend-oumj.onrender.com/api/chat/group/${selectedGroup._id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => setMessages(res.data))
      .catch(console.error);
  }, [selectedGroup, token, isMember]);

  // Socket connection for group chat
  useEffect(() => {
    if (!token || !selectedGroup || !isMember(selectedGroup)) return;
    socketRef.current = createSocket(token);

    // Join group room
    socketRef.current.emit("joinGroup", selectedGroup._id);

    socketRef.current.on("newGroupMessage", (msg) => {
      if (msg.chatRoom === selectedGroup._id || msg.groupId === selectedGroup._id) {
        setMessages((prev) => [...prev, msg]);
      }
    });

    return () => {
      socketRef.current.emit("leaveGroup", selectedGroup._id);
      socketRef.current.disconnect();
    };
  }, [token, selectedGroup, isMember]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send group message
  const sendMessage = () => {
    if (!input.trim() || !selectedGroup || !isMember(selectedGroup) || !socketRef.current) return;
    socketRef.current.emit("sendGroupMessage", {
      roomId: selectedGroup._id,
      content: input,
    });
    setInput("");
  };

  // UI for not selected or not a member
  if (!selectedGroup) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
          alt="Select group"
          className="w-24 h-24 mb-4 opacity-60"
        />
        <p className="text-lg">Select a group to start chatting or join a new group!</p>
      </div>
    );
  }
  if (!isMember(selectedGroup)) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
        <p className="mb-4 text-lg">You are not a member of this group.</p>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => handleJoinGroup(selectedGroup._id)}
          disabled={joining}
        >
          {joining ? "Joining..." : "Join Group"}
        </button>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full" style={{ height: "100%" }}>
      <h2 className="text-xl font-bold mb-2">{selectedGroup.name} Chat</h2>
      {/* Messages area */}
      <div
        className="flex-1 overflow-y-auto p-4 bg-white text-black"
        style={{ minHeight: 0, maxHeight: "calc(100vh - 180px)" }}
      >
        {messages.map((msg, idx) => {
          const isCurrentUser =
            msg.sender === currentUser._id || msg.sender?._id === currentUser._id;
          return (
            <div
              key={msg._id || idx}
              className={`mb-2 flex ${isCurrentUser ? "justify-end" : "justify-start"}`}
            >
              <span
                className={`inline-block px-3 py-1 rounded ${
                  isCurrentUser
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <b>{msg.senderName || msg.sender?.username || "User"}:</b> {msg.content}
              </span>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
      {/* Input area (always at bottom) */}
      <div className="p-2 bg-gray-100 flex border-t" style={{ position: "sticky", bottom: 0 }}>
        <input
          className="flex-1 border rounded px-2 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
        />
        <button
          className="ml-2 px-4 py-1 bg-green-600 text-white rounded"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default GroupChat;