const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  emial: {
    type: String,
    required: [true, "email is required"],
  },
});

const User = mongoose.model("User", userSchema);

model.exports = User;
