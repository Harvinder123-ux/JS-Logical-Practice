import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  id: Number,
  title: String,
  phone: Number,
  desc: String,
});

export const User = mongoose.model("User", userSchema);
