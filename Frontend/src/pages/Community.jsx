import { useState } from 'react';
import Sidebar from '../components/Sidebar';
function Community() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'John Farmer',
      type: 'farmer',
      content: 'Just harvested fresh organic tomatoes! Available for direct purchase.',
      timestamp: '2 hours ago',
      likes: 15,
      comments: 5
    },
    {
      id: 2,
      author: 'Mary Consumer',
      type: 'consumer',
      content: 'Looking for fresh vegetables in the Springfield area. Any farmers here?',
      timestamp: '3 hours ago',
      likes: 8,
      comments: 3
    }
  ]);

  return (
    <div className='flex'>
      <Sidebar className='h-full'/>
   
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        
        <div className="bg-white rounded-lg p-4 shadow my-5 w-[56rem]">
          <textarea
            className="w-full p-3 border rounded-lg resize-none"
            placeholder="Share updates with the community..."
            rows="3"
          />
          <div className="mt-3 flex justify-end">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Post Update
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg p-6 shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
              <div className="ml-3">
                <p className="font-semibold text-gray-800">{post.author}</p>
                <p className="text-sm text-gray-500">
                  <span className="capitalize">{post.type}</span> • {post.timestamp}
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <div className="flex items-center space-x-4 text-gray-500">
              <button className="flex items-center space-x-2 hover:text-green-600">
                <span>👍 {post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-green-600">
                <span>💬 {post.comments}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>
  );  
}

export default Community;