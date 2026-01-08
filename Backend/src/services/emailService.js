import nodemailer from "nodemailer";
import fetch from "node-fetch";
import { ENV } from "../config/env.js";

const QUOTE_API = "https://dummyjson.com/quotes/random";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: ENV.EMAIL_USER,
    pass: ENV.EMAIL_PASS
  }
});

async function getRandomQuote() {
  try {
    const response = await fetch(QUOTE_API);
    if (!response.ok) throw new Error("Quote API failed");

    const data = await response.json();
    return {
      quote: data.quote,
      author: data.author
    };
  } catch (err) {
    console.error("Quote fetch error:", err);
    return {
      quote: "Consistency and discipline lead to progress.",
      author: "MotiMail"
    };
  }
}

function buildEmailHTML(quote, author) {
  return `
    <div style="font-family:Georgia,serif;background:#f4f1dc;padding:24px">
      <p style="font-size:20px;line-height:1.6;color:#2c2c2c">
        "${quote}"
      </p>
      <p style="font-size:16px;color:#555;text-align:right;font-style:italic">
        - ${author}
      </p>
    </div>
  `;
}

export async function sendMotivationEmail(to) {
  const { quote, author } = await getRandomQuote();
  const html = buildEmailHTML(quote, author);

  await transporter.sendMail({
    from: `"MotiMail" <${ENV.EMAIL_USER}>`,
    to,
    subject: "Daily Motivation",
    html
  });

  return { quote, author };
}
