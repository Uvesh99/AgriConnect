import { useState } from 'react';
import { FaBell, FaUser } from 'react-icons/fa';

function Conav() {
  const [userType] = useState('farmer'); // This would come from auth context in a real app

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-green-600">
              FarmConnect Community
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <FaBell className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 text-xs text-white flex items-center justify-center">
                3
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <FaUser className="h-6 w-6 text-gray-500" />
              <span className="text-sm font-medium text-gray-700 capitalize">
                {userType}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Conav;