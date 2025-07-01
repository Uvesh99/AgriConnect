// import React, { useEffect, useState } from "react";
// import Sidebar from "../components/Sidebar";
// import DirectMessages from "../components/DirectMessages";
// import axios from "axios";

// // Replace with your actual API endpoint
// const USERS_API = "http://localhost:5000/api/users";

// function DirectMessagesPage({ currentUser, token }) {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);

//   // Fetch all users except current user
//   useEffect(() => {
//     if (!token) return;
//     axios
//       .get(USERS_API, { headers: { Authorization: `Bearer ${token}` } })
//       .then((res) => {
//         // Exclude current user from the list
//         setUsers(res.data.filter((u) => u._id !== currentUser._id));
//       })
//       .catch(console.error);
//   }, [token, currentUser]);
// console.log(users);
//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <div className="flex flex-1">
//         {/* User List */}
//         <div className="w-64 bg-gray-100 p-4 border-r">
//           <h2 className="font-bold mb-4">Users</h2>
//           <ul>
//             {users.map((user) => (
//               <li
//                 key={user._id}
//                 className={`p-2 rounded cursor-pointer ${
//                   selectedUser && selectedUser._id === user._id
//                     ? "bg-green-200"
//                     : "hover:bg-green-100"
//                 }`}
//                 onClick={() => setSelectedUser(user)}
//               >
//                 {user.name || user.username}
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* Chat Window */}
//         <div className="flex-1 flex flex-col">
//           {selectedUser ? (
//             <DirectMessages
//               currentUser={currentUser}
//               selectedUser={selectedUser}
//               token={token}
//             />
//           ) : (
//             <div className="flex-1 flex items-center justify-center text-gray-400">
//               Select a user to start chatting
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DirectMessagesPage;

// import React, { useEffect, useState } from "react";
// import Sidebar from "../components/Sidebar";
// import DirectMessages from "../components/DirectMessages";
// import axios from "axios";

// // Replace with your actual API endpoint
// const USERS_API = "http://localhost:5000/api/users/";

// function DirectMessagesPage() {
//   // Fetch current user and token from localStorage
//   const [currentUser, setCurrentUser] = useState(null);
//   const [token, setToken] = useState(null);
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);

//   useEffect(() => {
//     // Example: adjust keys if you store differently
//     const username = localStorage.getItem("username");
//     const email = localStorage.getItem("email");
//     const phone = localStorage.getItem("phone");
//     const role = localStorage.getItem("role");
//     const _id = localStorage.getItem("userId"); // Make sure you store userId on login/signup
//     const jwtToken = localStorage.getItem("authToken"); // Make sure you store token on login/signup

//     if (username && email && _id && jwtToken) {
//       setCurrentUser({ username, email, phone, role, _id });
//       setToken(jwtToken);
//     }
//   }, []);

//   // Fetch all users except current user
//   useEffect(() => {
//     if (!token || !currentUser) return;
//     axios
//       .get(USERS_API, { headers: { Authorization: `Bearer ${token}` } })
//       .then((res) => {
//         setUsers(res.data.filter((u) => u._id !== currentUser._id));
//       })
//       .catch(console.error);
//   }, [token, currentUser]);

//   if (!currentUser || !token) {
//     return (
//       <div className="flex min-h-screen">
//         <Sidebar />
//         <div className="flex-1 flex items-center justify-center text-gray-400">
//           Please log in to use direct messages.
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <div className="flex flex-1">
//         {/* User List */}
//         <div className="w-64 bg-gray-100 p-4 border-r">
//           <h2 className="font-bold mb-4">Users</h2>
//           <ul>
//             {users.map((user) => (
//               <li
//                 key={user._id}
//                 className={`p-2 rounded cursor-pointer ${
//                   selectedUser && selectedUser._id === user._id
//                     ? "bg-green-200"
//                     : "hover:bg-green-100"
//                 }`}
//                 onClick={() => setSelectedUser(user)}
//               >
//                 {user.name || user.username}
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* Chat Window */}
//         <div className="flex-1 flex flex-col">
//           {selectedUser ? (
//             <DirectMessages
//               currentUser={currentUser}
//               selectedUser={selectedUser}
//               token={token}
//             />
//           ) : (
//             <div className="flex-1 flex items-center justify-center text-gray-400">
//               Select a user to start chatting
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DirectMessagesPage;

// import React, { useEffect, useState } from "react";
// import Sidebar from "../components/Sidebar";
// import axios from "axios";
// import DirectMessages from "../components/DirectMessages";
// // // Replace with your actual API endpoint
// const USERS_API = "https://agriconnect-backend-oumj.onrender.com/api/user/";

// function DirectMessagesPage(){
//     const [currentUser, setCurrentUser] = useState(null);
//   const [token, setToken] = useState(null);
//     const [users, setUsers] = useState([]);
//        const [selectedUser, setSelectedUser] = useState(null);
//     useEffect(() => {
//     // Example: adjust keys if you store differently
//     const username = localStorage.getItem("username");
//     const email = localStorage.getItem("email");
//     const phone = localStorage.getItem("phone");
//     const role = localStorage.getItem("role");
//     const _id = localStorage.getItem("userId"); // Make sure you store userId on login/signup
//     const jwtToken = localStorage.getItem("authToken"); // Make sure you store token on login/signup
//       console.log(jwtToken);
//     if (username && email && _id && jwtToken) {
//       setCurrentUser({ username, email, phone, role, _id });
//       setToken(jwtToken);
//     }
//   }, []);
//   console.log('token', token);
//   console.log(currentUser);

//     // Fetch all users except current user
//   useEffect(() => {
//     if (!token || !currentUser) return;
//     axios
//       .get(USERS_API, { headers: { Authorization: `Bearer ${token}` } })
//       .then((res) => {
//         setUsers(res.data.filter((u) => u._id !== currentUser._id));
//       })
//       .catch(console.error);
//   }, [token, currentUser]);

//   if (!currentUser || !token) {
//     return (
//       <div className="flex min-h-screen">
//         <Sidebar />
//         <div className="flex-1 flex items-center justify-center text-gray-400">
//           Please log in to use direct messages.
//         </div>
//       </div>
//     );
//   }
//     return(
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <div className="flex flex-1">
//         {/* User List */}
//         <div className="w-64 bg-gray-100 p-4 border-r">
//           <h2 className="font-bold mb-4">Users</h2>
//           <ul>
//             {users.map((user) => (
//               <li
//                 key={user._id}
//                 className={`p-2 rounded cursor-pointer ${
//                   selectedUser && selectedUser._id === user._id
//                     ? "bg-green-200"
//                     : "hover:bg-green-100"
//                 }`}
//                 onClick={() => setSelectedUser(user)}
//               >
//                 {user.name || user.username}
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* Chat Window */}
//         <div className="flex-1 flex flex-col">
//           {selectedUser ? (
//             <DirectMessages
//               currentUser={currentUser}
//               selectedUser={selectedUser}
//               token={token}
//             />
//           ) : (
//             <div className="flex-1 flex items-center justify-center text-gray-400">
//               Select a user to start chatting
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//     )
// }
// export default DirectMessagesPage;

// import React, { useEffect, useState } from "react";
// import Sidebar from "../components/Sidebar";
// import axios from "axios";
// import DirectMessages from "../components/DirectMessages";

// const CONTACTS_API = "https://agriconnect-backend-oumj.onrender.com/api/chat/contacts";

// function DirectMessagesPage() {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [token, setToken] = useState(null);
//   const [contacts, setContacts] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const username = localStorage.getItem("username");
//     const email = localStorage.getItem("email");
//     const phone = localStorage.getItem("phone");
//     const role = localStorage.getItem("role");
//     const _id = localStorage.getItem("userId");
//     const jwtToken = localStorage.getItem("authToken");
//     if (username && email && _id && jwtToken) {
//       setCurrentUser({ username, email, phone, role, _id });
//       setToken(jwtToken);
//     }
//   }, []);

//   // Fetch contacts (users who have chatted before)
//   useEffect(() => {
//     if (!token || !currentUser) return;
//     axios
//       .get(CONTACTS_API, { headers: { Authorization: `Bearer ${token}` } })
//       .then((res) => setContacts(res.data))
//       .catch(console.error);
//   }, [token, currentUser]);

//   // Filter contacts by search
//   const filteredContacts = contacts.filter(
//     (user) =>
//       user.username?.toLowerCase().includes(search.toLowerCase()) ||
//       user.name?.toLowerCase().includes(search.toLowerCase())
//   );

//   if (!currentUser || !token) {
//     return (
//       <div className="flex min-h-screen">
//         <Sidebar />
//         <div className="flex-1 flex items-center justify-center text-gray-400">
//           Please log in to use direct messages.
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <div className="flex flex-1">
//         {/* User List */}
//         <div className="w-64 bg-gray-100 p-4 border-r">
//           <h2 className="font-bold mb-4">Chats</h2>
//           <input
//             type="text"
//             placeholder="Search user..."
//             className="w-full mb-4 p-2 rounded border"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <ul>
//             {filteredContacts.map((user) => (
//               <li
//                 key={user._id}
//                 className={`p-2 rounded cursor-pointer ${
//                   selectedUser && selectedUser._id === user._id
//                     ? "bg-green-200"
//                     : "hover:bg-green-100"
//                 }`}
//                 onClick={() => setSelectedUser(user)}
//               >
//                 {user.name || user.username}
//               </li>
//             ))}
//             {filteredContacts.length === 0 && (
//               <li className="text-gray-400 text-center">No users found</li>
//             )}
//           </ul>
//         </div>
//         {/* Chat Window */}
//         <div className="flex-1 flex flex-col">
//           {selectedUser ? (
//             <DirectMessages
//               currentUser={currentUser}
//               selectedUser={selectedUser}
//               token={token}
//             />
//           ) : (
//             <div className="flex-1 flex items-center justify-center text-gray-400">
//               Select a user to start chatting
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DirectMessagesPage;

import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import DirectMessages from "../components/DirectMessages";
import { FaBars, FaTimes } from "react-icons/fa";

const CONTACTS_API = "https://agriconnect-backend-oumj.onrender.com/api/chat/contacts";

function DirectMessagesPage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");
  const [showUserList, setShowUserList] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
    const role = localStorage.getItem("role");
    const _id = localStorage.getItem("userId");
    const jwtToken = localStorage.getItem("authToken");
    if (username && email && _id && jwtToken) {
      setCurrentUser({ username, email, phone, role, _id });
      setToken(jwtToken);
    }
  }, []);

  // Fetch contacts (users who have chatted before)
  useEffect(() => {
    if (!token || !currentUser) return;
    axios
      .get(CONTACTS_API, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setContacts(res.data))
      .catch(console.error);
  }, [token, currentUser]);

  // Filter contacts by search
  const filteredContacts = contacts.filter(
    (user) =>
      user.username?.toLowerCase().includes(search.toLowerCase()) ||
      user.name?.toLowerCase().includes(search.toLowerCase())
  );

  if (!currentUser || !token) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center text-gray-400">
          Please log in to use direct messages.
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar: hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      {/* Mobile user list toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 bg-green-700 text-white p-2 rounded-full shadow-lg"
        onClick={() => setShowUserList(true)}
        aria-label="Open user list"
      >
        <FaBars size={22} />
      </button>
      {/* User List Drawer (mobile) */}
      {showUserList && (
        <div className="fixed inset-0 z-40 flex">
          <div className="w-64 bg-gray-100 p-4 border-r h-full overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold">Chats</h2>
              <button
                className="text-gray-600"
                onClick={() => setShowUserList(false)}
                aria-label="Close user list"
              >
                <FaTimes size={22} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Search user..."
              className="w-full mb-4 p-2 rounded border"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
              {filteredContacts.map((user) => (
                <li
                  key={user._id}
                  className={`p-2 rounded cursor-pointer ${
                    selectedUser && selectedUser._id === user._id
                      ? "bg-green-200"
                      : "hover:bg-green-100"
                  }`}
                  onClick={() => {
                    setSelectedUser(user);
                    setShowUserList(false); // Close drawer on select
                  }}
                >
                  {user.name || user.username}
                </li>
              ))}
              {filteredContacts.length === 0 && (
                <li className="text-gray-400 text-center">No users found</li>
              )}
            </ul>
          </div>
          {/* Overlay */}
          <div
            className="flex-1 bg-black bg-opacity-40"
            onClick={() => setShowUserList(false)}
          />
        </div>
      )}
      {/* Main content */}
      <div className="flex flex-1">
        {/* User List: visible on desktop */}
        <div className="hidden md:block w-64 bg-gray-100 p-4 border-r">
          <h2 className="font-bold mb-4">Chats</h2>
          <input
            type="text"
            placeholder="Search user..."
            className="w-full mb-4 p-2 rounded border"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <ul>
            {filteredContacts.map((user) => (
              <li
                key={user._id}
                className={`p-2 rounded cursor-pointer ${
                  selectedUser && selectedUser._id === user._id
                    ? "bg-green-200"
                    : "hover:bg-green-100"
                }`}
                onClick={() => setSelectedUser(user)}
              >
                {user.name || user.username}
              </li>
            ))}
            {filteredContacts.length === 0 && (
              <li className="text-gray-400 text-center">No users found</li>
            )}
          </ul>
        </div>
        {/* Chat Window */}
        <div className="flex-1 flex flex-col">
          {selectedUser ? (
            <DirectMessages
              currentUser={currentUser}
              selectedUser={selectedUser}
              token={token}
            />
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400">
              Select a user to start chatting
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DirectMessagesPage;