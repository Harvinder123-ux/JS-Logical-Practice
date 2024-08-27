import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  passwrod: String,
});

export const User = mongoose.model("User", userSchema);
