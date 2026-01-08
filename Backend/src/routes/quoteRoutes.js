import express from "express";
import fetch from "node-fetch";

const router = express.Router();

const API_URL = "https://dummyjson.com/quotes/random";

router.get("/random", async (req, res) => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }

    const data = await response.json();

    res.json({
      quote: data.quote,
      author: data.author
    });

  } catch (error) {
    console.error("Quote API error:", error);

    res.status(500).json({
      message: "Could not fetch quote at this time"
    });
  }
});

export default router;
