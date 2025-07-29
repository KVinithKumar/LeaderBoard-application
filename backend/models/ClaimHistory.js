const mongoose = require("mongoose");

const claimHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  pointsClaimed: Number,
  claimedAt: {
    type: Date,
    default: Date.now
  }
});

// ✅ Correct export line
module.exports = mongoose.model("ClaimHistory", claimHistorySchema);
