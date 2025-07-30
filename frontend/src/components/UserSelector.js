import React from "react";

const UserSelector = ({ users, selectedUser, setSelectedUser }) => {
  return (
    <div className="mb-4 w-full">
      <label className="block mb-1 font-semibold text-gray-700">Select User:</label>
      <select
        className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm bg-white"
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.target.value)}
      >
        <option value="">-- Choose a User --</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelector;
