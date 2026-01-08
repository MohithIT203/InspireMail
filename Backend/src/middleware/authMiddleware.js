import jwt from "jsonwebtoken";
import { ENV } from "../config/env.js";

export default function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);

  req.user = jwt.verify(token, ENV.JWT_SECRET);
  next();
}
