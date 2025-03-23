import { NavLink } from 'react-router-dom';
import { FaHome, FaComments, FaUsers, FaChartLine } from 'react-icons/fa';

function Sidebar() {
  const menuItems = [
    { path: '/community', icon: FaHome, text: 'Community Feed' },
    { path: '/messages', icon: FaComments, text: 'Direct Messages' },
    { path: '/groups', icon: FaUsers, text: 'Groups' },
    { path: '/market-updates', icon: FaChartLine, text: 'Market Updates' },
  ];

  return (
    <div className="bg-green-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav className="space-y-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-2.5 rounded transition duration-200 ${
                isActive ? 'bg-green-700' : 'hover:bg-green-700'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.text}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;