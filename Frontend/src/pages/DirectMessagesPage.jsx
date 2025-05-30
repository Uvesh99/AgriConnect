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

import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import DirectMessages from "../components/DirectMessages";
// // Replace with your actual API endpoint
const USERS_API = "http://localhost:5000/api/user/";

function DirectMessagesPage(){
    const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
    const [users, setUsers] = useState([]);
       const [selectedUser, setSelectedUser] = useState(null);
    useEffect(() => {
    // Example: adjust keys if you store differently
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
    const role = localStorage.getItem("role");
    const _id = localStorage.getItem("userId"); // Make sure you store userId on login/signup
    const jwtToken = localStorage.getItem("authToken"); // Make sure you store token on login/signup
      console.log(jwtToken);
    if (username && email && _id && jwtToken) {
      setCurrentUser({ username, email, phone, role, _id });
      setToken(jwtToken);
    }
  }, []);
  console.log('token', token);
  console.log(currentUser);

    // Fetch all users except current user
  useEffect(() => {
    if (!token || !currentUser) return;
    axios
      .get(USERS_API, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setUsers(res.data.filter((u) => u._id !== currentUser._id));
      })
      .catch(console.error);
  }, [token, currentUser]);

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
    return(
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1">
        {/* User List */}
        <div className="w-64 bg-gray-100 p-4 border-r">
          <h2 className="font-bold mb-4">Users</h2>
          <ul>
            {users.map((user) => (
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
    )
}
export default DirectMessagesPage;