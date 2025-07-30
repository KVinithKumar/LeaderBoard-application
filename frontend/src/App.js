import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "./config";

import UserSelector from "./components/UserSelector";
import ClaimButton from "./components/ClaimButton";
import Leaderboard from "./components/Leaderboard";
import ClaimHistory from "./components/ClaimHistory";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [claimHistory, setClaimHistory] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get(`${BASE_URL}/api/users`);
    setUsers(res.data);
  };

  const fetchLeaderboard = async () => {
    const res = await axios.get(`${BASE_URL}/api/users/leaderboard`);
    setLeaderboard(res.data);
  };

  const fetchClaimHistory = async () => {
    const res = await axios.get(`${BASE_URL}/api/users/history`);
    setClaimHistory(res.data);
  };

  const handleAddUser = async () => {
    if (!newUser.trim()) return alert("Please enter a name");
    try {
      await axios.post(`${BASE_URL}/api/users`, { name: newUser });
      setNewUser("");
      fetchUsers();
      fetchLeaderboard();
      fetchClaimHistory();
      alert("User created!");
    } catch (err) {
      alert("Failed to create user");
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchLeaderboard();
    fetchClaimHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-indigo-100 p-6 font-sans">
      <div className="max-w-2xl mx-auto bg-white bg-opacity-90 shadow-2xl rounded-3xl p-10 border border-indigo-200 backdrop-blur-sm">
        <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-8 tracking-tight drop-shadow-md">
          🏆 Monthly Leaderboard
        </h1>

        {/* Add New User */}
        <div className="flex gap-3 mb-8">
          <input
            type="text"
            placeholder="Enter new user name"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
            className="flex-1 px-5 py-3 border border-indigo-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
          />
          <button
            onClick={handleAddUser}
            className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition shadow-lg"
          >
            ➕ Create
          </button>
        </div>

        {/* User Selection + Claim */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-between items-center">
          <UserSelector
            users={users}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
          <ClaimButton
            selectedUser={selectedUser}
            refreshLeaderboard={() => {
              fetchLeaderboard();
              fetchClaimHistory();
            }}
          />
        </div>

        {/* Leaderboard */}
        <Leaderboard leaderboard={leaderboard} />

        {/* Claim History */}
        <ClaimHistory history={claimHistory} />
      </div>
    </div>
  );
}

export default App;
