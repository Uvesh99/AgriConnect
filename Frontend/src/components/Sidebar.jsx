// import { NavLink } from 'react-router-dom';
// import { FaHome, FaComments, FaUsers, FaChartLine } from 'react-icons/fa';

// function Sidebar() {
//   const menuItems = [
//     { path: '/community', icon: FaHome, text: 'Community Feed' },
//     { path: '/messages', icon: FaComments, text: 'Direct Messages' },
//     { path: '/groups', icon: FaUsers, text: 'Groups' },
//     { path: '/market-updates', icon: FaChartLine, text: 'Market Updates' },
//   ];

//   return (
//     <div className="bg-green-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
//       <nav className="space-y-3">
//         {menuItems.map((item) => (
//           <NavLink
//             key={item.path}
//             to={item.path}
//             className={({ isActive }) =>
//               `flex items-center space-x-3 px-4 py-2.5 rounded transition duration-200 ${
//                 isActive ? 'bg-green-700' : 'hover:bg-green-700'
//               }`
//             }
//           >
//             <item.icon className="w-5 h-5" />
//             <span>{item.text}</span>
//           </NavLink>
//         ))}
//       </nav>
//     </div>
//   );
// }

// export default Sidebar;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaComments, FaUsers, FaChartLine, FaBars, FaTimes } from 'react-icons/fa';

function Sidebar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { path: '/community', icon: FaHome, text: 'Community Feed' },
    { path: '/messages', icon: FaComments, text: 'Direct Messages' },
    { path: '/groups', icon: FaUsers, text: 'Groups' },
    { path: '/market-updates', icon: FaChartLine, text: 'Market Updates' },
  ];

  return (
    <>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-green-700 text-white p-2 rounded-full shadow-lg"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <FaBars size={22} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed z-50 inset-y-0 left-0 w-64 bg-green-800 text-white space-y-6 py-7 px-2 transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-200 ease-in-out md:relative md:translate-x-0 md:z-0`}
      >
        {/* Close button for mobile */}
        <div className="flex justify-end md:hidden">
          <button
            className="text-white p-2"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
          >
            <FaTimes size={22} />
          </button>
        </div>
        <nav className="space-y-3 mt-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-2.5 rounded transition duration-200 ${
                  isActive ? 'bg-green-700' : 'hover:bg-green-700'
                }`
              }
              onClick={() => setOpen(false)} // Close sidebar on link click (mobile)
            >
              <item.icon className="w-5 h-5" />
              <span>{item.text}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Sidebar;