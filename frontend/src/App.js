import React, { useEffect, useState } from "react";
import axios from "axios";
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
    const res = await axios.get("http://localhost:5000/api/users");
    setUsers(res.data);
  };

  const fetchLeaderboard = async () => {
    const res = await axios.get("http://localhost:5000/api/users/leaderboard");
    setLeaderboard(res.data);
  };

  const fetchClaimHistory = async () => {
    const res = await axios.get("http://localhost:5000/api/users/history");
    setClaimHistory(res.data);
  };

  const handleAddUser = async () => {
    if (!newUser.trim()) return alert("Please enter a name");
    try {
      await axios.post("http://localhost:5000/api/users", { name: newUser });
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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">🏆 Leaderboard</h1>

        {/* Add New User */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter new user name"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />
          <button
            onClick={handleAddUser}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Create
          </button>
        </div>

        {/* User Selection + Claim */}
        <div className="flex flex-col sm:flex-row gap-2 mb-6 justify-between items-center">
          <UserSelector
            users={users}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
          <ClaimButton
            selectedUser={selectedUser}
            refreshLeaderboard={() => {
              fetchLeaderboard();
              fetchClaimHistory(); // also refresh history on claim
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
