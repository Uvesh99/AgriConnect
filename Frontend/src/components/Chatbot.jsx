// // src/components/Chatbot.jsx
// import { useState } from "react";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const API_KEY = "AIzaSyAF5WnWgLOWJthnfD6_KpSuD7eI5FdAQBk";

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { sender: "user", text: input };
//     setMessages([...messages, userMessage]);

//     const agriconnectInfo = `
//       AgriConnect is a platform that bridges natural farmers with conscious consumers. 
//       It helps farmers find reliable markets while ensuring consumers get transparency about natural farming products.
//       Key features:
//       - Farmer verification through digital certification.
//       - Consumer traceability via QR codes for tracking product origins, farming methods, and certifications.
//       - A direct marketplace that connects verified farmers to consumers, reducing intermediary costs and ensuring fair pricing.
//       Respond briefly to user queries based on this mission and functionality.
//     `;

//     try {
//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [{ parts: [{ text: `User Query: ${input}\n\n${agriconnectInfo}` }] }],
//           }),
//         }
//       );

//       const data = await response.json();
//       const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";

//       setMessages([...messages, userMessage, { sender: "bot", text: botReply }]);
//     } catch (error) {
//       setMessages([...messages, userMessage, { sender: "bot", text: "Error fetching response." }]);
//     }

//     setInput("");
//   };

//   return (
//     <div className="fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-lg p-4 border">
//       <h2 className="text-lg font-semibold mb-2">AgriConnect Chatbot</h2>
//       <div className="h-60 overflow-y-auto border p-2 mb-2">
//         {messages.map((msg, i) => (
//           <div key={i} className={`mb-1 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
//             <span className={`inline-block px-2 py-1 rounded-lg ${msg.sender === "user" ? "bg-blue-200" : "bg-gray-200"}`}>
//               {msg.text}
//             </span>
//           </div>
//         ))}
//       </div>
//       <div className="flex">
//         <input
//           className="flex-1 border rounded-l p-2"
//           type="text"
//           placeholder="Ask me about AgriConnect..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <button className="bg-blue-500 text-white px-4 rounded-r" onClick={sendMessage}>
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

// src/components/Chatbot.jsx
// src/components/Chatbot.jsx
import { useState } from "react";
import { MessageCircle, X } from "lucide-react"; // Using Lucide React for icons

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls chat window visibility
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const API_KEY = "AIzaSyAF5WnWgLOWJthnfD6_KpSuD7eI5FdAQBk";

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    const agriconnectInfo = `
      AgriConnect is a platform that bridges natural farmers with conscious consumers. 
      It helps farmers find reliable markets while ensuring consumers get transparency about natural farming products.
      Key features:
      - Farmer verification through digital certification.
      - Consumer traceability via QR codes for tracking product origins, farming methods, and certifications.
      - A direct marketplace that connects verified farmers to consumers, reducing intermediary costs and ensuring fair pricing.
      Respond briefly to user queries based on this mission and functionality.
    `;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: `User Query: ${input}\n\n${agriconnectInfo}` }] }],
          }),
        }
      );

      const data = await response.json();
      const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";

      setMessages([...messages, userMessage, { sender: "bot", text: botReply }]);
    } catch (error) {
      setMessages([...messages, userMessage, { sender: "bot", text: "Error fetching response." }]);
    }

    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {/* Chatbot Icon Button */}
      <button
        className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
        onClick={toggleChat}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 bg-white shadow-lg rounded-lg p-4 border mt-2 relative">
          <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={toggleChat}>
            <X size={18} />
          </button>
          <h2 className="text-lg font-semibold mb-2">AgriConnect Chatbot</h2>
          <div className="h-60 overflow-y-auto border p-2 mb-2">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-1 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                <span className={`inline-block px-2 py-1 rounded-lg ${msg.sender === "user" ? "bg-blue-200" : "bg-gray-200"}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              className="flex-1 border rounded-l p-2"
              type="text"
              placeholder="Ask about AgriConnect..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button className="bg-blue-500 text-white px-4 rounded-r" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
