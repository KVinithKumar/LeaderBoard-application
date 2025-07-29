import React from "react";

const ClaimHistory = ({ history }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-6">
      <h2 className="text-xl font-bold mb-3">🕒 Recent Claims</h2>
      <ul className="divide-y">
        {history.map((entry, index) => (
          <li key={index} className="py-2">
            <p>
              <span className="font-semibold">{entry.user}</span> claimed{" "}
              <span className="text-blue-600 font-bold">{entry.points}</span> points
            </p>
            <p className="text-sm text-gray-500">
              {new Date(entry.time).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClaimHistory;
