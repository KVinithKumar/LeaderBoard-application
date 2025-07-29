import React from "react";

const UserSelector = ({ users, selectedUser, setSelectedUser }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-semibold">Select User:</label>
      <select
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
