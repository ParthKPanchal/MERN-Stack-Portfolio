const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema(
  {
    browser: String,
    os: String,
    platform: String,
    visitedAt: {
      type: Date,
      default: Date.now,
    },
  }
);

module.exports = mongoose.model(
  "Visitor",
  visitorSchema
);