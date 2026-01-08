import cron from "node-cron";
import User from "../models/User.js";
import EmailLog from "../models/emailLog.js";
import { sendMotivationEmail } from "../services/emailService.js";

export default function startEmailScheduler() {
  cron.schedule("* * * * *", async () => {
    const now = new Date().toTimeString().slice(0, 5);

    const users = await User.find({
      scheduleTime: now,
      active: true
    });

    for (const user of users) {
      try {
        const { quote } = await sendMotivationEmail(user.email);

        await EmailLog.create({
          userId: user._id,
          title: quote
        });

        console.log(`Email sent to ${user.email}`);
      } catch (err) {
        console.error(`Failed to send email to ${user.email}`, err);
      }
    }
  });
}
