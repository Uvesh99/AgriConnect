import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Chatbot from '../components/Chatbot';
function DirectMessages() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [contacts] = useState([
    { id: 1, name: 'John Farmer', type: 'farmer', lastMessage: 'About the tomatoes...' },
    { id: 2, name: 'Sarah Consumer', type: 'consumer', lastMessage: 'When will the next batch be ready?' },
  ]);

  return (
    <Chatbot />
    // <div className='flex'>
    //   <Sidebar className='h-[100vh] my-4'/>
    
    // <div className="flex h-[calc(100vh-7rem)]" style={{transform: 'transLateY(3rem)', marginLeft: '3rem'}}>
    //   {/* Contacts List */}
    //   <div className="w-[22rem] bg-white rounded-lg shadow mr-4 overflow-y-auto ">
    //     <div className="p-4 border-b">
    //       <h2 className="text-xl font-semibold">Messages</h2>
    //     </div>
    //     <div className="divide-y">
    //       {contacts.map((contact) => (
    //         <div
    //           key={contact.id}
    //           className="p-4 hover:bg-gray-50 cursor-pointer"
    //           onClick={() => setSelectedChat(contact)}
    //         >
    //           <div className="flex items-center">
    //             <div className="w-10 h-10 bg-gray-200 rounded-full" />
    //             <div className="ml-3">
    //               <p className="font-medium">{contact.name}</p>
    //               <p className="text-sm text-gray-500">{contact.lastMessage}</p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Chat Area */}
    //   <div className="flex-1 bg-white rounded-lg shadow w-[47rem]">
    //     {selectedChat ? (
    //       <div className="h-full flex flex-col">
    //         <div className="p-4 border-b">
    //           <h3 className="text-lg font-semibold">{selectedChat.name}</h3>
    //         </div>
    //         <div className="flex-1 p-4 overflow-y-auto">
    //           {/* Messages would go here */}
    //         </div>
    //         <div className="p-4 border-t">
    //           <div className="flex space-x-2">
    //             <input
    //               type="text"
    //               placeholder="Type a message..."
    //               className="flex-1 p-2 border rounded-lg"
    //             />
    //             <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
    //               Send
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     ) : (
    //       <div className="h-full flex items-center justify-center text-gray-500">
    //         Select a conversation to start messaging
    //       </div>
    //     )}
    //   </div>
    //   </div>
    //   </div>
  );
}

export default DirectMessages;