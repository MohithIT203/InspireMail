import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ENV } from "../config/env.js";

export const signup = async (req, res) => {
  const { email, password, scheduleTime } = req.body;
  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({ email, password: hash, scheduleTime });
  res.json(user);
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, ENV.JWT_SECRET);
  res.json({ token });
};
