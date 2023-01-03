const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    required: false,
  },
  deletedAt: {
    type: Date,
    default: null,
    required: false,
  },
});

module.exports = mongoose.model("admins", adminSchema);
