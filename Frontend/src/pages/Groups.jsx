import { useState } from 'react';
import Sidebar from '../components/Sidebar';
function Groups() {
  const [groups] = useState([
    {
      id: 1,
      name: 'Organic Farmers Network',
      members: 156,
      description: 'A group for organic farmers to share knowledge and resources'
    },
    {
      id: 2,
      name: 'Local Food Buyers',
      members: 89,
      description: 'Connect with local farmers and buy fresh produce directly'
    },
    {
      id: 3,
      name: 'Sustainable Agriculture',
      members: 234,
      description: 'Discussing sustainable farming practices and innovations'
    }
  ]);

  return (
    <div className='flex'>
      <Sidebar className='h-full'/>
    
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6 my-4">
        <h1 className="text-3xl font-bold text-gray-800">Groups</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Create New Group
        </button>
      </div>

      <div className="grid gap-6">
        {groups.map((group) => (
          <div key={group.id} className="bg-white rounded-lg p-6 shadow w-[55rem]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{group.name}</h3>
                <p className="text-sm text-gray-500">{group.members} members</p>
              </div>
              <button className="bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200">
                Join Group
              </button>
            </div>
            <p className="text-gray-600">{group.description}</p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">and {group.members - 3} more</span>
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>
  );
}

export default Groups;