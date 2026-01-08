import EmailLog from "../models/emailLog.js";
import User from "../models/User.js";

export const getHistory = async (req, res) => {
  const logs = await EmailLog.find({ userId: req.user.id });
  res.json(logs);
};

export const unsubscribe = async (req, res) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });
  res.json({ message: "Unsubscribed" });
};
