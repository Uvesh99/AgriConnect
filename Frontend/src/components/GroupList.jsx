import React from "react";

function GroupList({ groups, selectedGroup, setSelectedGroup, isMember, handleJoinGroup, joining }) {
  return (
    <div className="w-1/3">
      <div className="grid gap-4">
        {groups.map((group) => (
          <div
            key={group._id}
            className={`bg-white rounded-lg p-4 shadow cursor-pointer ${
              selectedGroup && selectedGroup._id === group._id
                ? "border-2 border-green-600"
                : ""
            }`}
            onClick={() => setSelectedGroup(group)}
          >
            <h3 className="text-lg font-semibold text-gray-800">{group.name}</h3>
            <p className="text-sm text-gray-500">{group.members.length} members</p>
            <p className="text-gray-600">{group.description}</p>
            {!isMember(group) && (
              <button
                className="mt-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleJoinGroup(group._id);
                }}
                disabled={joining}
              >
                {joining ? "Joining..." : "Join Group"}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupList;