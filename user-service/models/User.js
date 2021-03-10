const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  accountNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true,
  },
  identityNumber: {
    type: Number,
    required: true,
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
