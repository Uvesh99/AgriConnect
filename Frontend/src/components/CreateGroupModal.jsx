import React from "react";

function CreateGroupModal({
  show,
  onClose,
  error,
  newGroup,
  setNewGroup,
  creating,
  handleCreateGroup,
}) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4">Create New Group</h2>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <input
          className="w-full border rounded px-3 py-2 mb-3"
          placeholder="Group Name"
          value={newGroup.name}
          onChange={e => setNewGroup({ ...newGroup, name: e.target.value })}
        />
        <textarea
          className="w-full border rounded px-3 py-2 mb-3"
          placeholder="Description"
          value={newGroup.description}
          onChange={e => setNewGroup({ ...newGroup, description: e.target.value })}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          disabled={creating}
          onClick={handleCreateGroup}
        >
          {creating ? "Creating..." : "Create"}
        </button>
      </div>
    </div>
  );
}

export default CreateGroupModal;