import React from "react";
import axios from "axios";

const ClaimButton = ({ selectedUser, refreshLeaderboard }) => {
  const handleClaim = async () => {
    if (!selectedUser) return alert("Please select a user");
    try {
      const res = await axios.post("http://localhost:5000/api/users/claim", {
        userId: selectedUser,
      });
      alert(`${res.data.user.name} claimed ${res.data.pointsClaimed} points!`);
      refreshLeaderboard();
    } catch (err) {
      alert("Error claiming points");
    }
  };

  return (
    <button
      onClick={handleClaim}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
    >
      Claim Points
    </button>
  );
};

export default ClaimButton;
