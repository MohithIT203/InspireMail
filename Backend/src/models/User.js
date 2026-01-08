import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  scheduleTime: String,
  active: { type: Boolean, default: true }
});

export default mongoose.model("User", userSchema);
