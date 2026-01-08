import app from "./app.js";
import connectDB from "./src/config/db.js";
import { ENV } from "./src/config/env.js";
import startScheduler from "./src/services/emailScheduler.js";

connectDB(ENV.MONGO_URI);

app.listen(ENV.PORT, () => {
  console.log("Server running");
  startScheduler();
});
