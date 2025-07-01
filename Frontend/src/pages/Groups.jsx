import { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { createSocket } from "../utils/socket";
import GroupList from "../components/GroupList";
import GroupChat from "../components/GroupChat";
import CreateGroupModal from "../components/CreateGroupModal";

function Groups() {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newGroup, setNewGroup] = useState({ name: "", description: "" });
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");
  const [joining, setJoining] = useState(false);
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Fetch user/token from localStorage
  useEffect(() => {
    const _id = localStorage.getItem("userId");
    const username = localStorage.getItem("username");
    const jwtToken = localStorage.getItem("authToken");
    if (_id && username && jwtToken) {
      setCurrentUser({ _id, username });
      setToken(jwtToken);
    }
  }, []);

  // Fetch all groups from backend
  useEffect(() => {
    if (!token) return;
    axios
      .get(
        "http://agriconnect-backend-env.eba-mzszbuas.ap-south-1.elasticbeanstalk.com/api/chat/all-groups",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => setGroups(res.data))
      .catch(console.error);
  }, [token]);

  // Fetch group messages when group is selected and user is a member
  useEffect(() => {
    if (!selectedGroup || !token || !isMember(selectedGroup)) return;
    axios
      .get(
        `http://agriconnect-backend-env.eba-mzszbuas.ap-south-1.elasticbeanstalk.com/api/chat/group/${selectedGroup._id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => setMessages(res.data))
      .catch(console.error);
  }, [selectedGroup, token]);

  // Socket connection for group chat
  // useEffect(() => {
  //   if (!token || !selectedGroup || !isMember(selectedGroup)) return;
  //   socketRef.current = createSocket(token);

  //   // Join group room
  //   socketRef.current.emit("joinGroup", selectedGroup._id);

  //   socketRef.current.on("newGroupMessage", (msg) => {
  //     if (msg.chatRoom === selectedGroup._id) {
  //       setMessages((prev) => [...prev, msg]);
  //     }
  //   });

  //   return () => {
  //     socketRef.current.emit("leaveGroup", selectedGroup._id);
  //     socketRef.current.disconnect();
  //   };
  //   // eslint-disable-next-line
  // }, [token, selectedGroup && selectedGroup._id, selectedGroup && selectedGroup.members]);

  // Check if current user is a member of the group
  function isMember(group) {
    return group?.members?.some(
      (m) => m === currentUser._id || m._id === currentUser._id
    );
  }

  // Send group message
  const sendMessage = () => {
    if (!input.trim() || !selectedGroup) return;
    socketRef.current.emit("sendGroupMessage", {
      roomId: selectedGroup._id,
      content: input,
    });
    setInput("");
  };

  // Create group handler
  const handleCreateGroup = async () => {
    setCreating(true);
    setError("");
    try {
      const res = await axios.post(
        "http://agriconnect-backend-env.eba-mzszbuas.ap-south-1.elasticbeanstalk.com/api/chat/group",
        newGroup,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setGroups((prev) => [...prev, res.data]);
      setShowCreateModal(false);
      setNewGroup({ name: "", description: "" });
      setSelectedGroup(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create group");
    } finally {
      setCreating(false);
    }
  };

  // Join group handler
  const handleJoinGroup = async (groupId) => {
    setJoining(true);
    setError("");
    try {
      await axios.post(
        `http://agriconnect-backend-env.eba-mzszbuas.ap-south-1.elasticbeanstalk.com/api/chat/group/${groupId}/join`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // Refetch all groups to update membership
      const res = await axios.get(
        "http://agriconnect-backend-env.eba-mzszbuas.ap-south-1.elasticbeanstalk.com/api/chat/all-groups",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setGroups(res.data);
      // Update selectedGroup with the latest data
      const joinedGroup = res.data.find((g) => g._id === groupId);
      setSelectedGroup(joinedGroup);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to join group");
    } finally {
      setJoining(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6 my-4">
          <h1 className="text-3xl font-bold text-gray-800">Groups</h1>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
            onClick={() => setShowCreateModal(true)}
          >
            + Create Group
          </button>
        </div>
        <div className="flex gap-6">
          <GroupList
            groups={groups}
            selectedGroup={selectedGroup}
            setSelectedGroup={setSelectedGroup}
            isMember={isMember}
            handleJoinGroup={handleJoinGroup}
            joining={joining}
          />
          <div className="flex-1 flex flex-col bg-white rounded-lg shadow p-4">
            <GroupChat
              selectedGroup={selectedGroup}
              isMember={isMember}
              currentUser={currentUser}
              token={token}
              handleJoinGroup={handleJoinGroup}
              joining={joining}
              error={error}
            />
          </div>
        </div>
        <CreateGroupModal
          show={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          error={error}
          newGroup={newGroup}
          setNewGroup={setNewGroup}
          creating={creating}
          handleCreateGroup={handleCreateGroup}
        />
      </div>
    </div>
  );
}

export default Groups;
