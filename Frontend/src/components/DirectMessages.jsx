// import React, { useEffect, useRef, useState } from "react";
// import { createSocket } from "../utils/socket";
// import axios from "axios";

// function DirectMessages({ currentUser, selectedUser, token }) {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const socketRef = useRef(null);

//   // Fetch chat history
//   useEffect(() => {
//     if (!selectedUser) return;
//     axios
//       .get(
//         `http://localhost:5000/api/chat/private/${selectedUser._id}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       )
//       .then((res) => setMessages(res.data))
//       .catch(console.error);
//   }, [selectedUser, token]);

//   // Socket connection
//   useEffect(() => {
//     if (!token) return;
//     socketRef.current = createSocket(token);

//     // Join own room for private messages
//     socketRef.current.emit("joinRoom", currentUser._id);

//     socketRef.current.on("newMessage", (msg) => {
//       // Only add if relevant to this chat
//       if (
//         (msg.sender === currentUser._id && msg.receiver === selectedUser._id) ||
//         (msg.sender === selectedUser._id && msg.receiver === currentUser._id)
//       ) {
//         setMessages((prev) => [...prev, msg]);
//       }
//     });

//     return () => {
//       socketRef.current.disconnect();
//     };
//   }, [token, currentUser, selectedUser]);

//   // Send message
//   const sendMessage = () => {
//     if (!input.trim()) return;
//     socketRef.current.emit("sendMessage", {
//       receiverId: selectedUser._id,
//       content: input,
//     });
//     setInput("");
//   };

//   return (
//     <div className="flex flex-col h-full">
//       <div className="flex-1 overflow-y-auto p-4 bg-white text-black">
//         {messages.map((msg, idx) => (
//           <div
//             key={msg._id || idx}
//             className={`mb-2 ${msg.sender === currentUser._id ? "text-right" : "text-left"}`}
//           >
//             <span className="inline-block px-3 py-1 rounded bg-green-200">{msg.content}</span>
//           </div>
//         ))}
//       </div>
//       <div className="p-2 bg-gray-100 flex">
//         <input
//           className="flex-1 border rounded px-2 py-1"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//           placeholder="Type a message..."
//         />
//         <button className="ml-2 px-4 py-1 bg-green-600 text-white rounded" onClick={sendMessage}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }

// export default DirectMessages;

// import React, { useEffect,useRef, useState } from "react";
// import axios from "axios";
// import { createSocket } from "../utils/socket.js";

// function DirectMessages({ currentUser, selectedUser, token }) {
//     // Fetch chat history
//     const [messages, setMessages] = useState([]);
//       const [input, setInput] = useState("");
//   const socketRef = useRef(null);
//   useEffect(() => {
//     if (!selectedUser) return;
//     axios
//       .get(
//         `https://agriconnect-backend-oumj.onrender.com/api/chat/private/${selectedUser._id}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       )
//       .then((res) => setMessages(res.data))
//       .catch(console.error);
//   }, [selectedUser, token]);
//   console.log('componet',currentUser )
//   console.log('componet',selectedUser )
//   console.log('componet',token)
//   console.log('message',messages[0])

//     useEffect(() => {
//     if (!token) return;
//     socketRef.current = createSocket(token);

//     // Join own room for private messages
//     socketRef.current.emit("joinRoom", currentUser._id);

//     socketRef.current.on("newMessage", (msg) => {
//       // Only add if relevant to this chat
//       if (
//         (msg.sender === currentUser._id && msg.receiver === selectedUser._id) ||
//         (msg.sender === selectedUser._id && msg.receiver === currentUser._id)
//       ) {
//         setMessages((prev) => [...prev, msg]);
//       }
//     });

//     return () => {
//       socketRef.current.disconnect();
//     };
//   }, [token, currentUser, selectedUser]);

//     // Send message
//   const sendMessage = () => {
//     if (!input.trim()) return;
//     socketRef.current.emit("sendMessage", {
//       receiverId: selectedUser._id,
//       content: input,
//     });
//     setInput("");
//   };
//   return (
//     <div className="flex flex-col h-full">
//       {/* <div className="flex-1 overflow-y-auto p-4 bg-white text-black">
//         {messages.map((msg, idx) => (
//           <div
//             key={msg._id || idx}
//             className={`mb-2 ${msg.sender === currentUser._id ? "text-right" : "text-left"}`}
//           >
//             <span className="inline-block px-3 py-1 rounded bg-green-200">{msg.content}</span>
//           </div>
//         ))}
//       </div> */}
//       <div className="flex-1 overflow-y-auto p-4 bg-white text-black">
//   {messages.map((msg, idx) => {
//     const isCurrentUser = msg.sender === currentUser._id || msg.sender?._id === currentUser._id;
//     return (
//       <div
//         key={msg._id || idx}
//         className={`mb-2 flex ${isCurrentUser ? "justify-end" : "justify-start"}`}
//       >
//         <span
//           className={`inline-block px-3 py-1 rounded ${
//             isCurrentUser
//               ? "bg-green-500 text-white"
//               : "bg-gray-200 text-gray-800"
//           }`}
//         >
//           {msg.content}
//         </span>
//       </div>
//     );
//   })}
// </div>
//       <div className="p-2 bg-gray-100 flex" style={{marginBottom: '20px'}}>
//         <input
//           className="flex-1 border rounded px-2 py-1"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//           placeholder="Type a message..."
//         />
//         <button className="ml-2 px-4 py-1 bg-green-600 text-white rounded" onClick={sendMessage}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }
// export default DirectMessages;

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { createSocket } from "../utils/socket.js";

function DirectMessages({ currentUser, selectedUser, token }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Fetch chat history
  useEffect(() => {
    if (!selectedUser) return;
    axios
      .get(
        `http://agriconnect-backend-env.eba-mzszbuas.ap-south-1.elasticbeanstalk.com/api/chat/private/${selectedUser._id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => setMessages(res.data))
      .catch(console.error);
  }, [selectedUser, token]);

  // Socket connection
  useEffect(() => {
    if (!token) return;
    socketRef.current = createSocket(token);

    // Join own room for private messages
    socketRef.current.emit("joinRoom", currentUser._id);

    socketRef.current.on("newMessage", (msg) => {
      // Only add if relevant to this chat
      if (
        (msg.sender === currentUser._id && msg.receiver === selectedUser._id) ||
        (msg.sender === selectedUser._id && msg.receiver === currentUser._id)
      ) {
        setMessages((prev) => [...prev, msg]);
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [token, currentUser, selectedUser]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send message
  const sendMessage = () => {
    if (!input.trim()) return;
    socketRef.current.emit("sendMessage", {
      receiverId: selectedUser._id,
      content: input,
    });
    setInput("");
  };

  return (
    <div className="flex flex-col h-full w-full" style={{ height: "100%" }}>
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
                {msg.content}
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

export default DirectMessages;