import express from "express";
import auth from "../middleware/authMiddleware.js";
import { getHistory, unsubscribe } from "../controllers/dashboardController.js";

const router = express.Router();
router.get("/", auth, getHistory);
router.post("/unsubscribe", auth, unsubscribe);

export default router;
