import mongoose from "mongoose";

const emailLogSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  title: String,
  sentAt: { type: Date, default: Date.now }
});

export default mongoose.model("EmailLog", emailLogSchema);
