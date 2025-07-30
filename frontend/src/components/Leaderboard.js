import React from "react";

const medalColors = ["bg-yellow-300", "bg-gray-300", "bg-orange-400"];

const Leaderboard = ({ leaderboard }) => {
  return (
    <div className="bg-gradient-to-tr from-yellow-100 via-white to-blue-100 shadow-lg rounded-2xl p-6 mt-6">
      <h2 className="text-2xl font-bold text-center text-yellow-700 mb-4">🏅 Monthly Wealth Ranking</h2>
      <div className="space-y-4">
        {leaderboard.map((user, index) => (
          <div
            key={index}
            className={`flex items-center justify-between px-4 py-3 rounded-xl shadow-md ${
              medalColors[index] || "bg-white"
            }`}
          >
            <div className="flex items-center gap-4">
              <img
                src={user.avatarUrl || `https://api.dicebear.com/7.x/thumbs/svg?seed=${user.name}`}
                alt={user.name}
                className="w-12 h-12 rounded-full border-2 border-yellow-500"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-500">Rank #{index + 1}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-yellow-800">{user.totalPoints} 🪙</p>
              {index < 3 && (
                <span className="text-xs text-white bg-yellow-500 px-2 py-1 rounded-full">
                  {["🥇 Gold", "🥈 Silver", "🥉 Bronze"][index]}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
