const User = require("../models/User");
const ClaimHistory = require("../models/ClaimHistory");

// Get all users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Add a new user
exports.addUser = async (req, res) => {
  const { name } = req.body;
  const user = new User({ name });
  await user.save();
  res.status(201).json(user);
};

// Claim random points
exports.claimPoints = async (req, res) => {
  const { userId } = req.body;
  const randomPoints = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.totalPoints += randomPoints;
  await user.save();

  const claim = new ClaimHistory({
    userId,
    pointsClaimed: randomPoints
  });
  await claim.save();

  res.json({ user, pointsClaimed: randomPoints });
};

// Get leaderboard
exports.getLeaderboard = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  const ranked = users.map((user, index) => ({
    name: user.name,
    totalPoints: user.totalPoints,
    rank: index + 1
  }));
  res.json(ranked);
};

// ✅ Get claim history
exports.getClaimHistory = async (req, res) => {
  try {
    const history = await ClaimHistory.find()
      .populate("userId", "name")
      .sort({ claimedAt: -1 })
      .limit(20); // recent 20

    const formatted = history.map(entry => ({
      user: entry.userId.name,
      points: entry.pointsClaimed,
      time: entry.claimedAt
    }));

    res.json(formatted);
  } catch (err) {
    console.error("Error fetching claim history:", err);
    res.status(500).json({ message: "Error fetching claim history" });
  }
};
