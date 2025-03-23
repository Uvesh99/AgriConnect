// Single File ChatBot Component

import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineSend } from 'react-icons/ai';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const getChatResponse = async (message) => {
    try {
      const response = await axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCke4DnreRsYq14UPf4-qmQr0qiB1mF6lg', {
        model: "gemini-2.0-flash",
        messages: [
          { role: "system", content: "You are a helpful chatbot for my website." },
          { role: "user", content: message },
        ],
      }, {
        headers: {
          'Authorization': 'AIzaSyCke4DnreRsYq14UPf4-qmQr0qiB1mF6lg',
          'Content-Type': 'application/json',
        },
      });
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error("Error fetching response:", error);
      return "Oops! Something went wrong.";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
        const botResponse = await getChatResponse(input);
        console.log(botResponse);
        
      setMessages((prev) => [...prev, { role: "bot", content: botResponse }]);
    } catch (error) {
      console.error(error);
    }

    setInput("");
  };

  return (
    <div className="flex flex-col justify-between h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4 text-center">🌟 Website Chatbot</h1>

      <div className="flex-grow overflow-y-auto bg-white p-4 rounded-lg shadow-md space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-xl ${
              msg.role === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-black self-start"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      <div className="flex items-center mt-4">
        <input
          type="text"
          className="flex-grow p-3 border-2 border-gray-300 rounded-l-lg focus:outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 flex items-center justify-center"
        >
          <AiOutlineSend size={24} />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;